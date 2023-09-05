import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ConstantsService } from '../util/constants/constants.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateBillingInfo, UpdateBillingInfo } from '../billing/types/BillingInfo.dto';
import { ActionService } from './actions.service';
import { BillAnAccount, RefundAnAccount } from './types/actions.dto';

@ApiTags('Actions')
@Controller()
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

  @Get(`${ConstantsService.ACTIONS_GET_TRANSACTIONS}/:accountUuid`)
  @ApiOperation({ summary: 'Get Billing Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  getAccountTransactions(@Param('accountUuid') accountId: string) {
    return this.actionService.getAccountTransactions();
  }

  @Post(`${ConstantsService.ACTIONS_BILL_AN_ACCOUNT}/:accountUuid`)
  @ApiOperation({ summary: 'Bill A Specific Account' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  billAnAccount(
    @Param('accountUuid') accountId: string,
    @Body() billAnAccount: BillAnAccount
    ) {
    return this.actionService.billAnAccount();
  }

  @Post(`${ConstantsService.ACTIONS_REFUND_AN_ACCOUNT}/:accountUuid`)
  @ApiOperation({ summary: 'Bill A Specific Account' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  refundAnAccount(
    @Param('accountUuid') accountId: string,
    @Body() refundAnAccount : RefundAnAccount
    ) {
    return this.actionService.refundAnAccount();
  }
}
