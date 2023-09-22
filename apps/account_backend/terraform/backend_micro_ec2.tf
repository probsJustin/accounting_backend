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
  key_name      = "Deployment-Key-Pair"

  subnet_id = aws_subnet.subnet_1.id
  vpc_security_group_ids = [aws_security_group.backend.id]

  user_data = <<-EOT
  #!/bin/bash

  sudo yum install -y docker
  sleep 30
  sudo service docker start
  sudo usermod -a -G docker ec2-user
  
  sudo docker pull nginx
  sudo docker run -d -p 80:80 nginx

  # Pull and run the Docker image
  sudo echo DB_HOST="${var.database_ip_address}" >> /etc/environment
  sudo echo DB_PASSWORD="${var.database_password}" >> /etc/environment
  sudo echo DB_USERNAME="${var.database_username}" >> /etc/environment
  sudo echo DB_PORT="${var.database_port}" >> /etc/environment
  sudo echo DB_NAME="${var.database_name}" >> /etc/environment

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

  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

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
  allowed_cidr_blocks = [var.database_ip_address]
}


# Internet Gateway to provide public access
resource "aws_internet_gateway" "main_igw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "Main Internet Gateway"
  }
}

# Route table for the public subnet (subnet_1)
resource "aws_route_table" "public_route_table" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main_igw.id
  }

  tags = {
    Name = "Public Route Table"
  }
}

# Associate the public subnet with the route table
resource "aws_route_table_association" "subnet_1_association" {
  subnet_id      = aws_subnet.subnet_1.id
  route_table_id = aws_route_table.public_route_table.id
}

# Ensure that the EC2 instance is associated with the security group and is in the public subnet


output "mysql_endpoint" {
  value = module.mysql_db.database_endpoint
}

output "mysql_port" {
  value = module.mysql_db.database_port
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

variable "database_ip_address" {
  description = "Your IP for MySQL access"
  default     = "1.2.3.4/32"
}
