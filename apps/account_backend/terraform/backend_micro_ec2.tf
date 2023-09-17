//generated with chatgpt 

provider "aws" {
  region = var.aws_region
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

  vpc_security_group_ids = [aws_security_group.backend.id]

  user_data = <<-EOT
  #!/bin/bash
  
  sudo useradd ec2-user
  echo "ec2-user:YOUR_PASSWORD" | sudo chpasswd
  sudo adduser ec2-user sudo

  # Update and Install Essential Packages
  sudo yum -y update
  sudo yum -y install wget git

  # Install Node.js and Nx CLI
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
  . ~/.nvm/nvm.sh
  nvm install node
  npm install -g nx

  # Clone Nx Monorepo
  git clone https://github.com/probsJustin/accounting_backend ~/nx-monorepo
  cd ~/nx-monorepo

  # Install App Dependencies
  npm install

  # Start the Application in Background
  npx nx run account_backend:serve:development --verbose &

EOT

  tags = {
    Name = "terraform-backend-instance"
  }
}

resource "aws_security_group" "backend" {
  name        = "backend"
  description = "Allow SSH inbound traffic and necessary application traffic"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  // Ideally, this should be restricted to known IPs
  }

  // Add more ingress rules as needed for your application, e.g., HTTP/HTTPS
}

module "mysql_db" {
  source              = "./mysql_db"
  subnet_ids          = [aws_subnet.subnet_1.id, aws_subnet.subnet_2.id]
  vpc_id              = aws_vpc.main.id
  db_name             = "example"
  db_username         = "root"
  db_password         = var.db_password
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
  default     = "ami-01103fb68b3569475"
}

variable "instance_type" {
  description = "The instance type of the EC2 instance"
  default     = "t2.micro"
}

variable "db_password" {
  description = "Password for the database root user"
  default     = "testtest"
}

variable "my_ip" {
  description = "Your IP for MySQL access"
  default     = "1.2.3.4/32"
}
