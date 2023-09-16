
//generated with chatgpt 
/*

Make sure you replace the paths /path/on/your/machine/.env and /path/on/your/instance/ with the correct paths.

Here's a brief explanation of the script:

AWS Provider: This defines which AWS region the resources will be created in.
EC2 instance: This resource block creates a t2.micro instance. The user_data section allows you to execute scripts at launch.
Key Pair: It's used to SSH into the EC2 instance.
Security Group: This allows SSH inbound traffic and all outbound traffic.
null_resource with remote-exec provisioner: This is used to execute commands on remote hosts. In this example, it's used to move the .env file to the desired path on the instance.
null_resource with file provisioner: This is used to upload files to remote hosts. In this example, it uploads the .env file to the EC2 instance.
Important Considerations:

Make sure you have the required permissions to create and manage these AWS resources.
Replace the AMI ID with the ID for the latest Amazon Linux 2 or another preferred AMI in your region.
Ensure you have an SSH key pair ready; this script assumes it's located in ~/.ssh/id_rsa.pub for the public key.
The security group allows SSH traffic from all IPs (0.0.0.0/0). Consider narrowing this down to your IP for security reasons.
Remember to run terraform init to initialize the Terraform configuration before applying the script with terraform apply.
Lastly, always ensure to follow best practices when working with Terraform and AWS, especially when managing real infrastructure and sensitive data.
*/

provider "aws" {
  region = "us-east-2"
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
  ami           = "ami-0c55b159cbfafe1f0"  // Replace this with the latest Amazon Linux 2 AMI ID for your region if needed
  instance_type = "t2.micro"
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
  description = "Allow SSH inbound traffic"
  vpc_id = aws_vpc.main.id

  ingress {
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 0
    to_port     = 65535
    protocol    = "udp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

module "mysql_db" {
  source              = "./mysql_db"
  subnet_ids          = [aws_subnet.subnet_1.id, aws_subnet.subnet_2.id]  // Include both subnets here
  vpc_id              = aws_vpc.main.id
  db_name             = "example"
  db_username         = "root"
  db_password         = "testtest"  # Please use a more secure password!
  allowed_cidr_blocks = ["1.2.3.4/32"]  # Replace with your IP or network range
}

output "mysql_endpoint" {
  value = module.mysql_db.db_endpoint
}

output "mysql_port" {
  value = module.mysql_db.db_port
}

resource "null_resource" "upload_env_file" {
  provisioner "file" {
    source      = "../.env"
    destination = "/home/ec2-user/.env"

    connection {
      type     = "ssh"
      user     = "ec2-user"
      password = "YOUR_PASSWORD"  // Replace with the password you set in user_data
      host     = aws_instance.backend.public_ip
    }
  }

  triggers = {
    instance_id = aws_instance.backend.id
  }

  depends_on = [aws_instance.backend]
}