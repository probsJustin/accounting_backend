import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';
import { AccountService } from './account.service';
import { ConstantsService } from '../util/constants/constants.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateAccountDto, UpdateAccountDto } from './types/account.dto';
import { LogParamsInterceptor } from '../util/logParams/logParams.ineceptor';

@ApiTags('Account')
@Controller(`${ConstantsService.ACCOUNT_URI}`)
export class AccountController {
  constructor(
    private readonly acccountService: AccountService,
    ) {}

  @Get(`/:accountUuid`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Get Account Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  getAccount(@Param('accountUuid') accountUuid: string) {
    return this.acccountService.getAccount(accountUuid);
  }

  @Get(`/:accountUuid/users`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Get Account Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  getAllUsersForAccount(@Param('accountUuid') accountUuid: string) {
    return this.acccountService.getAllUsersForAccount(accountUuid);
  }

  @Get(`/:accountUuid/transactions`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Get Transactions Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  getAllTransactionsForAccount(@Param('accountUuid') accountUuid: string) {
    return this.acccountService.getAllTransactionsForAccount(accountUuid);
  }

  @Get(`/:accountUuid/billingInfo`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Get Account Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  getAllBillingInfoForAccount(@Param('accountUuid') accountUuid: string) {
    return this.acccountService.getAllBillingInfoForAccount(accountUuid);
  }

  @Get(`/:accountUuid/all`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Get All Information for an Account' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  getAllInformationForAccount(@Param('accountUuid') accountUuid: string) {
    return this.acccountService.getAllInformationForAccount(accountUuid);
  }

  @Post()
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Create Account Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  createAccount(
    @Body() createAccountDto: CreateAccountDto
    ) {
    return this.acccountService.createAccount(createAccountDto);
  }

  @Put(`/:accountUuid`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Update Account Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  updateAccount(
    @Param('accountUuid') accountUuid: string,
    @Body() updateAccountDto: UpdateAccountDto
    ) {
    return this.acccountService.updateAccount(accountUuid, updateAccountDto);
  }

  @Delete(`/:accountUuid`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Delete Account Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  deleteAccount(@Param('accountUuid') accountUuid: string) {
    return this.acccountService.deleteAccount(accountUuid);
  }
}
