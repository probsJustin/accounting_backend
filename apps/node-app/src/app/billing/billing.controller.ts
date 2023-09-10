import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';
import { BillingService } from './billing.service';
import { ConstantsService } from '../util/constants/constants.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateBillingInfo, UpdateBillingInfo } from './types/billingInfo.dto';
import { LogParamsInterceptor } from '../util/logParams/logParams.ineceptor';

@ApiTags('Billing')
@Controller(`${ConstantsService.BILLING_URI}`)
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get(`/:billingTableId`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Get Billing Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  getBillingInformation(@Param('billingTableId') billingTableId: string) {
    return this.billingService.getBillingInformation(billingTableId);
  }

  @Post()
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Create Billing Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  createBillingInformation(
    @Body() createBillingInfo: CreateBillingInfo
    ) {
    return this.billingService.createBillingInformation(createBillingInfo);
  }

  @Put(`/:billingTableId`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Update Billing Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  updateBillingInformation(
    @Param('billingTableId') billingTableId: string,
    @Body() updateBillingInfo: UpdateBillingInfo
    ) {
    return this.billingService.updateBillingInformation(billingTableId, updateBillingInfo);
  }

  @Delete(`/:billingTableId`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Delete Billing Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  deleteBillingInformation(@Param('billingTableId') billingTableId: string) {
    return this.billingService.deleteBillingInformation(billingTableId);
  }
}
