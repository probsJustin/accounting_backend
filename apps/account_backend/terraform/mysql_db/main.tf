

resource "aws_route_table" "default" {
  vpc_id = var.vpc_id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = var.database_ig_id
  }
}

resource "aws_main_route_table_association" "default" {
  vpc_id         = var.vpc_id
  route_table_id = aws_route_table.default.id
}

resource "aws_subnet" "default_subnet_a" {
  vpc_id                  = var.vpc_id
  cidr_block              = "10.0.10.0/24"
  availability_zone       = "us-east-2a"
  map_public_ip_on_launch = true
}

resource "aws_subnet" "default_subnet_b" {
  vpc_id                  = var.vpc_id
  cidr_block              = "10.0.11.0/24"
  availability_zone       = "us-east-2b"
  map_public_ip_on_launch = true
}

resource "aws_db_subnet_group" "default_subnet_group" {
name       = "electronisys-backend-db-subnet-group"
subnet_ids = [aws_subnet.default_subnet_a.id, aws_subnet.default_subnet_b.id]
  tags = {
    Name = "electronisys-backend-db-subnet-group"
  }
}

resource "aws_security_group" "allow_all" {
  vpc_id = var.vpc_id
  name        = "allow_all"
  description = "Allow all inbound traffic"

  ingress {
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_db_instance" "default" {
  allocated_storage        = 20
  storage_type             = "gp2"
  engine                   = "mysql"
  engine_version           = "5.7"
  instance_class           = "db.t2.micro"
  identifier               = var.db_name
  username                 = var.db_username
  password                 = var.db_password
  parameter_group_name     = "default.mysql5.7"
  skip_final_snapshot      = true
  vpc_security_group_ids   = [aws_security_group.allow_all.id]
  db_subnet_group_name     = aws_db_subnet_group.default_subnet_group.name
  publicly_accessible      = true
}
