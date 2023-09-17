resource "aws_db_subnet_group" "mysql" {
  name       = "mysql-subnet-group-unique"
  subnet_ids = var.subnet_ids

  tags = {
    name       = "mysql-subnet-group-unique"
  }
}

resource "aws_security_group" "mysql" {
  name        = "mysql-sg"
  description = "MySQL RDS security group"
  vpc_id      = var.vpc_id

  ingress {
    from_port   = 3306
    to_port     = 3306
    protocol    = "tcp"
    cidr_blocks = var.allowed_cidr_blocks
  }
}

resource "aws_db_instance" "mysql" {
  allocated_storage    = var.allocated_storage
  storage_type         = "gp2"
  engine               = "mysql"
  engine_version       = var.mysql_version
  instance_class       = var.instance_type
  identifier           = var.db_name
  username             = var.db_username
  password             = var.db_password
  parameter_group_name = "default.mysql5.7"
  skip_final_snapshot  = true

  db_subnet_group_name = aws_db_subnet_group.mysql.name
  vpc_security_group_ids = [aws_security_group.mysql.id]
  
  tags = {
    Name = "mysql-db-instance"
  }
}
