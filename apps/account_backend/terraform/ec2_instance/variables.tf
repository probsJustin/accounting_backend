variable "subnet_id" {
  description = "The ID of the subnet where the instance should be deployed"
  type        = string
}

variable "vpc_id" {
  description = "The ID of the VPC"
  type        = string
}

variable "ami_id" {
  description = "The ID of the Amazon Machine Image (AMI)."
  type        = string
}

variable "instance_type" {
  description = "The type of instance to start."
  type        = string
}

variable "user_data" {
  description = "The user data to provide when launching the instance."
  type        = string
  default     = null
}

variable "security_group_id" {
  description = "The ID of the security group to associate with the EC2 instance."
  type        = string
}



