resource "aws_security_group" "alb_sg" {
  name        = "3lectronisys-alb-sg"
  description = "Allow all inbound traffic"
  vpc_id      = var.ec2_vpc_id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_lb" "this" {
  name               = "3lectronisys-lb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb_sg.id]
  subnets = var.subnet_ids

  enable_deletion_protection = false

  enable_cross_zone_load_balancing   = true
  idle_timeout                        = 60
  enable_http2                        = true
}

resource "aws_lb_listener" "front_end" {
  load_balancer_arn = aws_lb.this.arn
  port              = "8080"
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.this.arn
  }
}

resource "aws_lb_target_group_attachment" "this" {
  count             = length(var.instance_id_ec2_instance)
  target_group_arn = aws_lb_target_group.this.arn
  target_id         = var.instance_id_ec2_instance[count.index]
  port             = 8080
}

resource "aws_lb_target_group" "this" {
  name     = "3lectronisys-tg"
  port     = 8080
  protocol = "HTTP"
  vpc_id   = var.ec2_vpc_id
}
