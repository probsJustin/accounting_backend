variable "subnet_ids" {
  description = "The list of subnet IDs for the RDS instance"
  type        = list(string)
}

variable "vpc_id" {
  description = "The VPC ID where the RDS instance will reside"
  type        = string
}

variable "allowed_cidr_blocks" {
  description = "CIDR blocks allowed to connect to the RDS instance"
  type        = list(string)
  default     = ["0.0.0.0/0"]  # Open to the world by default, should be restricted
}

variable "allocated_storage" {
  description = "The amount of storage (in gibibytes) to allocate to the RDS instance"
  type        = number
  default     = 20
}

variable "mysql_version" {
  description = "The version of MySQL to use"
  type        = string
  default     = "5.7"
}

variable "instance_type" {
  description = "The instance type of the RDS instance"
  type        = string
  default     = "db.t2.micro"
}

variable "db_name" {
  description = "The name of the initial database to be created"
  type        = string
}

variable "db_username" {
  description = "The username for the initial administrative user"
  type        = string
}

variable "db_password" {
  description = "The password for the initial administrative user"
  type        = string
}
