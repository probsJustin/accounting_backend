variable "ec2_vpc_id" {
  description = "The VPC ID where resources will be created"
  type        = string
}

variable "subnet_ids" {
  description = "List of Subnet IDs for the ALB"
  type        = list(string)
}
