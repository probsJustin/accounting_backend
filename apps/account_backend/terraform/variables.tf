
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
  default     = "0.0.0.0/0"
}

variable "aws_region" {
  description = "The AWS region to deploy into (e.g. us-east-2)"
  default     = "us-east-2"
}

variable "ami_id" {
  description = "The ID of the AMI to be used"
  default     = "ami-0a41508f56947864a"
}

variable "instance_type" {
  description = "The instance type of the EC2 instance"
  default     = "t2.medium"
}


