
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
  description = "AWS REGION"
  default     = "us-east-2"
}
