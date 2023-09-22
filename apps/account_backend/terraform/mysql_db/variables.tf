variable "vpc_id" {
  description = "The ID of the VPC"
  type        = string
}

variable "db_name" {
  description = "The database identifier"
  type        = string
  default     = "defaultdb"
}

variable "db_username" {
  description = "The username for the database"
  type        = string
  default     = "root"
}

variable "db_password" {
  description = "The password for the database"
  type        = string
  default     = "rootpassword"
}

variable "database_ig_id" {
  description = "The password for the database"
  type        = string
}