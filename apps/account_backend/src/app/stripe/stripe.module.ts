import { Module } from '@nestjs/common';
import { FrontEndStripeService } from './frontend-stripe.service';
import { BackEndStripeService } from './backend-stripe.service';

@Module({
  providers: [FrontEndStripeService, BackEndStripeService],
  exports: [FrontEndStripeService, BackEndStripeService],
})
export class StripeModule {}
