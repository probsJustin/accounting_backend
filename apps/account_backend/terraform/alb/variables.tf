variable "ec2_vpc_id" {
  description = "VPC ID for the EC2 instance"
  type        = string
}

variable "subnet_ids" {
  description = "List of subnet IDs for the Application Load Balancer"
  type        = list(string)
}

variable "instance_id_ec2_instance" {
  description = "List of subnet IDs for the Application Load Balancer"
  type        = list(string)
}