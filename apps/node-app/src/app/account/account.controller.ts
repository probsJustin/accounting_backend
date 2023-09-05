import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AccountService } from './account.service';
import { ConstantsService } from '../util/constants/constants.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateAccountDto, UpdateAccountDto } from './types/account.dto';

@ApiTags('Account')
@Controller()
export class AccountController {
  constructor(
    private readonly acccountService: AccountService,
    ) {}

  @Get(`${ConstantsService.ACCOUNT_URI}/:accountUuid`)
  @ApiOperation({ summary: 'Get Account Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  getAccount(@Param('accountUuid') accountId: string) {
    return this.acccountService.getAccount();
  }

  @Post(`${ConstantsService.ACCOUNT_URI}/:accountUuid`)
  @ApiOperation({ summary: 'Creeate Account Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  createAccount(
    @Param('accountUuid') accountId: string,
    @Body() createAccountDto: CreateAccountDto
    ) {
    return this.acccountService.getAccount();
  }

  @Put(`${ConstantsService.ACCOUNT_URI}/:accountUuid`)
  @ApiOperation({ summary: 'Update Account Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  updateAccount(
    @Param('accountUuid') accountId: string,
    @Body() updateAccountDto: UpdateAccountDto
    ) {
    return this.acccountService.getAccount();
  }

  @Delete(`${ConstantsService.ACCOUNT_URI}/:accountUuid`)
  @ApiOperation({ summary: 'Delete Account Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  deleteAccount(@Param('accountUuid') accountId: string) {
    return this.acccountService.getAccount();
  }
}
