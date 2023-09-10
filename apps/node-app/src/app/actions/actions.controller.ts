import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';
import { ConstantsService } from '../util/constants/constants.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ActionService } from './actions.service';
import { BillAnAccountDto, RefundAnAccountDto } from './types/actions.dto';
import { LogParamsInterceptor } from '../util/logParams/logParams.ineceptor';

@ApiTags('Actions')
@Controller(`${ConstantsService.ACTIONS_URI}`)
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

  @Get(`${ConstantsService.ACTIONS_GET_TRANSACTIONS}/:accountUuid`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Get Billing Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  getAccountTransactions(@Param('accountUuid') accountUuid: string) {
    return this.actionService.getAccountTransactions(accountUuid);
  }

  @Get(`testExampleDotCom`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Get Billing Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  testExampleRequest() {
    return this.actionService.testExampleRequest();
  }

  @Post(`${ConstantsService.ACTIONS_BILL_AN_ACCOUNT}/:accountUuid`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Bill A Specific Account' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  billAnAccount(
    @Param('accountUuid') accountUuid: string,
    @Body() billAnAccount: BillAnAccountDto
    ) {
    return this.actionService.billAnAccount(accountUuid, billAnAccount);
  }

  @Post(`${ConstantsService.ACTIONS_REFUND_AN_ACCOUNT}/:accountUuid`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Refund A Specific Account' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  refundAnAccount(
    @Param('accountUuid') accountUuid: string,
    @Body() refundAnAccount : RefundAnAccountDto
    ) {
    return this.actionService.refundAnAccount(accountUuid, refundAnAccount);
  }
}
