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

variable "aws_region" {
  description = "The AWS region to deploy into (e.g. us-east-2)"
  default     = "us-east-2"
}

variable "ami_id" {
  description = "The ID of the AMI to be used"
  default     = "ami-089a545a9ed9893b6"
}

variable "instance_type" {
  description = "The instance type of the EC2 instance"
  default     = "t2.medium"
}
