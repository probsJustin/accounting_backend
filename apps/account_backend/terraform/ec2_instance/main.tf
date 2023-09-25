data "aws_security_group" "existing" {
  filter {
    name   = "group-name"
    values = ["backend"]
  }
}

locals {
  sg_id = length(data.aws_security_group.existing.ids) > 0 ? data.aws_security_group.existing.ids[0] : aws_security_group.backend[0].id
}

resource "aws_instance" "backend" {
  count       = length(data.aws_security_group.existing.ids) > 0 ? 0 : 1
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = "Deployment-Key-Pair"

  subnet_id = var.subnet_id
  security_group_id = local.sg_id

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
