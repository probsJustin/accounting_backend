import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ConstantsService } from '../util/constants/constants.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateBillingInfo, UpdateBillingInfo } from '../billing/types/BillingInfo.dto';
import { ActionService } from './actions.service';
import { BillAnAccountDto, RefundAnAccountDto } from './types/actions.dto';

@ApiTags('Actions')
@Controller(`${ConstantsService.ACTIONS_URI}`)
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

  @Get(`${ConstantsService.ACTIONS_GET_TRANSACTIONS}/:accountUuid`)
  @ApiOperation({ summary: 'Get Billing Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  getAccountTransactions(@Param('accountUuid') accountUuid: string) {
    return this.actionService.getAccountTransactions(accountUuid);
  }

  @Post(`${ConstantsService.ACTIONS_BILL_AN_ACCOUNT}/:accountUuid`)
  @ApiOperation({ summary: 'Bill A Specific Account' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  billAnAccount(
    @Param('accountUuid') accountUuid: string,
    @Body() billAnAccount: BillAnAccountDto
    ) {
    return this.actionService.billAnAccount(accountUuid, billAnAccount);
  }

  @Post(`${ConstantsService.ACTIONS_REFUND_AN_ACCOUNT}/:accountUuid`)
  @ApiOperation({ summary: 'Bill A Specific Account' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  refundAnAccount(
    @Param('accountUuid') accountUuid: string,
    @Body() refundAnAccount : RefundAnAccountDto
    ) {
    return this.actionService.refundAnAccount(accountUuid, refundAnAccount);
  }
}
