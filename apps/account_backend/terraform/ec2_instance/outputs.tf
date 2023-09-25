output "instance_id" {
  description = "The ID of the EC2 instance"
  value       = aws_instance.backend.id
}

output "backend_security_group_id" {
  description = "The ID of the security group associated with the backend EC2 instance."
  value       = length(data.aws_security_group.existing_backend_sg) > 0 ? data.aws_security_group.existing_backend_sg[0].id : aws_security_group.backend.id
}

