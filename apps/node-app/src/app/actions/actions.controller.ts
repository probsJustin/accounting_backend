import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ConstantsService } from '../util/constants/constants.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateBillingInfo, UpdateBillingInfo } from '../billing/types/BillingInfo.dto';
import { ActionService } from './actions.service';
import { BillAnAccountDto, RefundAnAccountDto } from './types/actions.dto';

@ApiTags('Actions')
@Controller()
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

  @Get(`${ConstantsService.ACTIONS_GET_TRANSACTIONS}/:accountUuid`)
  @ApiOperation({ summary: 'Get Billing Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  getAccountTransactions(@Param('accountUuid') accountUuid: string) {
    return this.actionService.getAccountTransactions(accountUuid);
  }

  @Post(`${ConstantsService.ACTIONS_BILL_AN_ACCOUNT}/:accountUuid`)
  @ApiOperation({ summary: 'Bill A Specific Account' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  billAnAccount(
    @Param('accountUuid') accountUuid: string,
    @Body() billAnAccount: BillAnAccountDto
    ) {
    return this.actionService.billAnAccount(accountUuid, billAnAccount);
  }

  @Post(`${ConstantsService.ACTIONS_REFUND_AN_ACCOUNT}/:accountUuid`)
  @ApiOperation({ summary: 'Bill A Specific Account' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  refundAnAccount(
    @Param('accountUuid') accountUuid: string,
    @Body() refundAnAccount : RefundAnAccountDto
    ) {
    return this.actionService.refundAnAccount(accountUuid, refundAnAccount);
  }
}
