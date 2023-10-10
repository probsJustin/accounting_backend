//generated with chatgpt 

provider "aws" {
  region = var.aws_region
}

terraform {
  backend "s3" {
    bucket = "3lectronisys-backend"
    key    = ""
    region = "us-east-2"
    dynamodb_table = "3lectronisys-backend-locks"
    encrypt        = true
  }
}

resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = {
    Name = "3lectronisys Backend Main VPC"
  }
}


module "rds_setup" {
  source              = "./mysql_db"
  vpc_id              = aws_vpc.main.id # Replace with your VPC ID or reference to a VPC resource
  db_name             = var.database_name
  db_username         = var.database_username
  db_password         = var.database_password
  database_ig_id      = aws_internet_gateway.main_igw.id
}

output "my_db_endpoint" {
  value = module.rds_setup.db_endpoint
}


module "ec2_backend" {
  depends_on = [
    module.rds_setup
  ]
  source            = "./ec2_instance"
  ami_id            = var.ami_id
  instance_type     = var.instance_type
  subnet_id         = aws_subnet.subnet_1.id
  vpc_id            = aws_vpc.main.id
  user_data = <<-EOT
    #!/bin/bash

    # Add Environment Variables
    echo DB_HOST="${module.rds_setup.db_url}" >> /etc/environment
    echo DB_PASSWORD="${var.database_password}" >> /etc/environment
    echo DB_USERNAME="${var.database_username}" >> /etc/environment
    echo DB_PORT="${var.database_port}" >> /etc/environment
    echo DB_NAME="${var.database_name}" >> /etc/environment
    echo SESSION_SECRET="${var.session_secret}" >> /etc/environment
    
    # Start Docker
    sudo service docker start
    sudo docker pull nginx
    sudo docker run -d -p 80:80 nginx
    
    # Get docker-compose and make it executable
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose

    # Pull and run the Docker Compose setup
    sudo curl -O -L "https://raw.githubusercontent.com/probsJustin/accounting_backend/main/apps/account_backend/docker_compose.yaml"

    ls -l /usr/local/bin/docker-compose &>> docker_compose.log
    /usr/local/bin/docker-compose --version &>> docker_compose.log

    # Explicitly use the absolute path for docker-compose
    sudo /usr/local/bin/docker-compose -p account_backend -f ./docker_compose.yaml up -d &>> docker_compose.log


  EOT


}


# Route table for the public subnet (subnet_1)
resource "aws_route_table" "public_route_table" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main_igw.id
  }

  tags = {
    Name = "3lectronisys Backend Public Route Table"
  }
}

# Associate the public subnet with the route table
resource "aws_route_table_association" "subnet_1_association" {
  subnet_id      = aws_subnet.subnet_1.id
  route_table_id = aws_route_table.public_route_table.id
}

# Internet Gateway to provide public access
resource "aws_internet_gateway" "main_igw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "Main 3lectronisys Backend Internet Gateway"
  }
}

resource "aws_subnet" "subnet_1" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "us-east-2a"
  map_public_ip_on_launch = true
  tags = {
    Name = "3lectronisys Backend Subnet 1"
  }
}

resource "aws_subnet" "subnet_2" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.2.0/24"
  availability_zone       = "us-east-2b"
  tags = {
    Name = "3lectronisys Backend Subnet 2"
  }
}

module "application_load_balancer" {
  source                   = "./alb"
  ec2_vpc_id               = aws_vpc.main.id
  subnet_ids               = [aws_subnet.subnet_1.id, aws_subnet.subnet_2.id]
  instance_id_ec2_instance = [module.ec2_backend.instance_id]
}

module "dns_setup" {
  depends_on = [
    module.application_load_balancer
  ]
  source      = "./route53"
  website_url = "3lectronisys.com"
  
  lb_dns_name = module.application_load_balancer.alb_dns_name 
  lb_zone_id  = module.application_load_balancer.alb_zone_id
}
