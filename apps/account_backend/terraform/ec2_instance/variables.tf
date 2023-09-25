variable "module_ami_id" {
  description = "The ID of the AMI to be used"
  type        = string
}

variable "module_instance_type" {
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


