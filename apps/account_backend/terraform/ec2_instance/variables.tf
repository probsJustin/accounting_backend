variable "ami_id" {
  description = "The ID of the AMI to be used"
  type        = string
}

variable "instance_type" {
  description = "The instance type of the EC2 instance"
  type        = string
}

variable "subnet_id" {
  description = "The ID of the subnet where the instance should be deployed"
  type        = string
}

variable "vpc_id" {
  description = "The ID of the VPC"
  type        = string
}

variable "security_group_id" {
  description = "The ID of the security group for the EC2 instance"
  type        = string
}

variable "user_data" {
  description = "User data script to run on the EC2 instance at launch"
  type        = string
}
