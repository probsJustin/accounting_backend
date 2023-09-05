import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

import { BillingService } from './billing.service';
import { ConstantsService } from '../util/constants/constants.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateBillingInfo, UpdateBillingInfo } from './types/BillingInfo.dto';

@ApiTags('Billing')
@Controller()
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get(`${ConstantsService.BILLING_URI}/:accountUuid`)
  @ApiOperation({ summary: 'Get Billing Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  getBillingInformation(@Param('accountUuid') accountUuid: string) {
    return this.billingService.getBillingInformation(accountUuid);
  }

  @Post(`${ConstantsService.BILLING_URI}/:accountUuid`)
  @ApiOperation({ summary: 'Create Billing Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  createBillingInformation(
    @Param('accountUuid') accountUuid: string,
    @Body() createBillingInfo: CreateBillingInfo
    ) {
    return this.billingService.createBillingInformation(accountUuid, createBillingInfo);
  }

  @Put(`${ConstantsService.BILLING_URI}/:accountUuid`)
  @ApiOperation({ summary: 'Update Billing Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  updateBillingInformation(
    @Param('accountUuid') accountUuid: string,
    @Body() updateBillingInfo: UpdateBillingInfo
    ) {
    return this.billingService.updateBillingInformation(accountUuid, updateBillingInfo);
  }

  @Delete(`${ConstantsService.BILLING_URI}/:accountUuid`)
  @ApiOperation({ summary: 'Delete Billing Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  deleteBillingInformation(@Param('accountUuid') accountUuid: string) {
    return this.billingService.deleteBillingInformation(accountUuid);
  }
}
