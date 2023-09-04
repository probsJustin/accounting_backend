import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

import { BillingService } from './billing.service';
import { ConstantsService } from '../constants/constants.service';

@Controller()
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get(ConstantsService.BILLING_URI)
  getBillingInformation() {
    return this.billingService.getBillingInformation();
  }

  @Post(ConstantsService.BILLING_URI)
  createBillingInformation() {
    return this.billingService.getBillingInformation();
  }

  @Put(ConstantsService.BILLING_URI)
  updateBillingInformation() {
    return this.billingService.getBillingInformation();
  }

  @Delete(ConstantsService.BILLING_URI)
  deleteBillingInformation() {
    return this.billingService.getBillingInformation();
  }
}
