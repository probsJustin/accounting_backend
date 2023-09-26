output "db_endpoint" {
  value = aws_db_instance.default.endpoint
}

output "db_url" {
  description = "Database URL without the port."
  value      = split(":", aws_db_instance.default.endpoint)[0]
}