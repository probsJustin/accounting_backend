resource "aws_route53_zone" "this" {
  name = var.website_url

  tags = {
    Environment = "prod"
  }
}

resource "aws_route53_record" "this" {
  zone_id = aws_route53_zone.this.id
  name    = var.website_url
  type    = "A"

  alias {
    name                   = var.lb_dns_name
    zone_id                = var.lb_zone_id
    evaluate_target_health = true
  }
}
