import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

import { BillingService } from './billing.service';
import { ConstantsService } from '../constants/constants.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Billing')
@Controller()
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get(`${ConstantsService.BILLING_URI}/:accountUuid`)
  getBillingInformation(@Param(':accountUuid') accountId: string) {
    return this.billingService.getBillingInformation();
  }

  @Post(`${ConstantsService.BILLING_URI}/:accountUuid`)
  createBillingInformation(@Param(':accountUuid') accountId: string) {
    return this.billingService.getBillingInformation();
  }

  @Put(`${ConstantsService.BILLING_URI}/:accountUuid`)
  updateBillingInformation(@Param(':accountUuid') accountId: string) {
    return this.billingService.getBillingInformation();
  }

  @Delete(`${ConstantsService.BILLING_URI}/:accountUuid`)
  deleteBillingInformation(@Param(':accountUuid') accountId: string) {
    return this.billingService.getBillingInformation();
  }
}
