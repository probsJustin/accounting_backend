variable "website_url" {
  description = "website url to use"
  default     = "3lectronisys.com"
}

variable "lb_dns_name" {
  description = "The DNS name of the load balancer for the alias record"
  type        = string
}

variable "lb_zone_id" {
  description = "The Zone ID of the load balancer for the alias record"
  type        = string
}

