output "database_endpoint" {
  description = "The connection endpoint"
  value       = aws_db_instance.mysql.endpoint
}

output "database_port" {
  description = "The database port"
  value       = aws_db_instance.mysql.port
}
