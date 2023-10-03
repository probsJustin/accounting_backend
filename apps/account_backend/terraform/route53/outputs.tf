output "route53_zone_id" {
  value = aws_route53_zone.this.id
}

output "route53_record_name" {
  value = aws_route53_record.this.name
}



