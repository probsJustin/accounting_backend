variable "ec2_vpc_id" {
  description = "The VPC ID where resources will be created"
  type        = string
}

variable "subnet_ids" {
  description = "List of subnet IDs for the Application Load Balancer"
  type        = list(string)
}

