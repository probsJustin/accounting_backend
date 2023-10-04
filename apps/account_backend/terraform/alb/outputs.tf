output "alb_arn" {
  value = aws_lb.this.arn
}

output "alb_security_group_id" {
  value = aws_security_group.alb_sg.id
}

output "alb_target_group_arn" {
  value = aws_lb_target_group.this.arn
}

output "alb_listener_arn" {
  value = aws_lb_listener.front_end_80.arn
}

output "alb_zone_id" {
  value = aws_lb.this.zone_id
}

output "alb_dns_name" {
  description = "The DNS name of the ALB."
  value       = aws_lb.this.dns_name
}