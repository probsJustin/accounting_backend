output "instance_id" {
  description = "The ID of the EC2 instance"
  value       = aws_instance.backend.id
}

output "security_group_id" {
  description = "The ID of the security group"
  value       = aws_security_group.backend.id
}
