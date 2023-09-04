import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

import { BillingService } from './billing.service';

@Controller()
export class AppController {
  constructor(private readonly billingService: BillingService) {}

  @Get()
  getBillingInformation() {
    return this.billingService.getBillingInformation();
  }

  @Post()
  createBillingInformation() {
    return this.billingService.getBillingInformation();
  }

  @Put()
  updateBillingInformation() {
    return this.billingService.getBillingInformation();
  }

  @Delete()
  deleteBillingInformation() {
    return this.billingService.getBillingInformation();
  }
}
