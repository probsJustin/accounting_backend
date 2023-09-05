import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AccountService } from './account.service';
import { ConstantsService } from '../util/constants/constants.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateAccountDto, UpdateAccountDto } from './types/account.dto';

@ApiTags('Account')
@Controller(`${ConstantsService.ACCOUNT_URI}`)
export class AccountController {
  constructor(
    private readonly acccountService: AccountService,
    ) {}

  @Get(`/:accountUuid`)
  @ApiOperation({ summary: 'Get Account Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  getAccount(@Param('accountUuid') accountUuid: string) {
    return this.acccountService.getAccount(accountUuid);
  }

  @Post(`/:accountUuid`)
  @ApiOperation({ summary: 'Creeate Account Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  createAccount(
    @Param('accountUuid') accountUuid: string,
    @Body() createAccountDto: CreateAccountDto
    ) {
    return this.acccountService.createAccount(accountUuid, createAccountDto);
  }

  @Put(`/:accountUuid`)
  @ApiOperation({ summary: 'Update Account Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  updateAccount(
    @Param('accountUuid') accountUuid: string,
    @Body() updateAccountDto: UpdateAccountDto
    ) {
    return this.acccountService.updateAccount(accountUuid, updateAccountDto);
  }

  @Delete(`/:accountUuid`)
  @ApiOperation({ summary: 'Delete Account Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  deleteAccount(@Param('accountUuid') accountUuid: string) {
    return this.acccountService.deleteAccount(accountUuid);
  }
}
