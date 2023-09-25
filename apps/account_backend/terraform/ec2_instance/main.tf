data "aws_security_group" "existing" {
  filter {
    name   = "group-name"
    values = ["backend"]
  }

  filter {
    name   = "vpc-id"
    values = [var.vpc_id]
  }

  # The "count" parameter ensures this data block only runs if the group exists.
  count = length(aws_security_group.backend) == 0 ? 1 : 0
}


resource "aws_instance" "backend" {
  vpc_security_group_ids = length(data.aws_security_group.existing) > 0 ? [data.aws_security_group.existing[0].id] : [aws_security_group.backend.id]
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = "Deployment-Key-Pair"

  subnet_id = var.subnet_id

  user_data = var.user_data

  tags = {
    Name = "terraform-backend-instance"
  }
}

resource "aws_security_group" "backend" {
  name        = "backend"
  description = "Allow all inbound and outbound traffic for demonstration"
  vpc_id      = var.vpc_id

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
