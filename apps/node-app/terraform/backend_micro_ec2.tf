
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
  region = "us-west-1"
}

resource "aws_instance" "backend" {
  ami           = "ami-0c55b159cbfafe1f0" # You might need to replace this with the latest Amazon Linux 2 AMI ID for your region
  instance_type = "t2.micro"

  key_name               = aws_key_pair.backend.key_name
  vpc_security_group_ids = [aws_security_group.backend.id]

  user_data = <<-EOT
              #!/bin/bash
              sudo yum -y update
              sudo yum -y install wget
              # Add more commands as needed
              EOT

  tags = {
    Name = "terraform-backend-instance"
  }
}

resource "aws_key_pair" "backend" {
  key_name   = "backend-key"
  public_key = file("~/.ssh/id_rsa.pub") # Assuming you have a public key at this location
}

resource "aws_security_group" "backend" {
  name        = "backend"
  description = "Allow SSH inbound traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "null_resource" "copy_env_file" {
  provisioner "remote-exec" {
    inline = ["echo 'Copying .env file'", "sudo mv /home/ec2-user/.env /path/on/your/instance/"]

    connection {
      type        = "ssh"
      user        = "ec2-user"
      private_key = file("~/.ssh/id_rsa")
      host        = aws_instance.backend.public_ip
    }
  }

  triggers = {
    instance_id = aws_instance.backend.id
  }
}

resource "null_resource" "upload_env_file" {
  provisioner "file" {
    source      = "/path/on/your/machine/.env"
    destination = "/home/ec2-user/.env"

    connection {
      type        = "ssh"
      user        = "ec2-user"
      private_key = file("~/.ssh/id_rsa")
      host        = aws_instance.backend.public_ip
    }
  }

  triggers = {
    instance_id = aws_instance.backend.id
  }

  depends_on = [aws_instance.backend]
}