//generated with chatgpt 

provider "aws" {
  region = var.aws_region
}

terraform {
  backend "s3" {
    bucket = "backend-account"
    key    = ""
    region = "us-east-2"
    dynamodb_table = "terraform-up-and-running-locks"
    encrypt        = true
  }
}

resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "Main VPC"
  }
}

resource "aws_subnet" "subnet_1" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "us-east-2a"
  map_public_ip_on_launch = true
  tags = {
    Name = "Main Subnet 1"
  }
}

resource "aws_subnet" "subnet_2" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.2.0/24"
  availability_zone       = "us-east-2b"
  tags = {
    Name = "Main Subnet 2"
  }
}

resource "aws_instance" "backend" {
  ami           = var.ami_id
  instance_type = var.instance_type
  subnet_id     = aws_subnet.subnet_1.id
  key_name      = "Deployment-Key-Pair"
  vpc_security_group_ids = [aws_security_group.backend.id]

  user_data = <<-EOT
  #!/bin/bash

  yum install -y docker
  sleep 30
  service docker start
  usermod -a -G docker ec2-user
  
  # Pull and run the Docker image
  echo DB_HOST="${var.database_ip_address}" >> /etc/environment
  echo DB_PASSWORD="${var.database_password}" >> /etc/environment
  echo DB_USERNAME="${var.database_username}" >> /etc/environment
  echo DB_PORT="${var.database_port}" >> /etc/environment
  echo DB_NAME="${var.database_name}" >> /etc/environment

EOT

  tags = {
    Name = "terraform-backend-instance"
  }
}

# IAM Role and policies for SSM


resource "aws_security_group" "backend" {
  name        = "backend"
  description = "Allow all inbound and outbound traffic for demonstration"
  vpc_id      = aws_vpc.main.id

  // Allow all incoming traffic
  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  // Allow all outgoing traffic
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "backend"
  }
}

module "mysql_db" {
  source              = "./mysql_db"
  subnet_ids          = [aws_subnet.subnet_1.id, aws_subnet.subnet_2.id]
  vpc_id              = aws_vpc.main.id
  db_name             = var.database_name
  db_username         = var.database_username
  db_password         = var.database_password
  allowed_cidr_blocks = [var.my_ip]
}

output "mysql_endpoint" {
  value = module.mysql_db.db_endpoint
}

output "mysql_port" {
  value = module.mysql_db.db_port
}

// Variables
variable "aws_region" {
  description = "The AWS region to deploy into (e.g. us-east-2)"
  default     = "us-east-2"
}

variable "ami_id" {
  description = "The ID of the AMI to be used"
  default     = "ami-089a545a9ed9893b6"
}

variable "instance_type" {
  description = "The instance type of the EC2 instance"
  default     = "t2.medium"
}

variable "database_password" {
  description = "Password for the database root user"
  default     = "testtest"
}

variable "database_username" {
  description = "Password for the database root user"
  default     = "root"
}

variable "database_name" {
  description = "Password for the database root user"
  default     = "example"
}

variable "database_port" {
  description = "Database port"
  default     = 3306
}

variable "my_ip" {
  description = "Your IP for MySQL access"
  default     = "1.2.3.4/32"
}
