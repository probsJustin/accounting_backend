import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { AccountService } from './account.service';
import { ConstantsService } from '../util/constants/constants.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Account')
@Controller()
export class AccountController {
  constructor(
    private readonly acccountService: AccountService,
    ) {}

  @Get(`${ConstantsService.ACCOUNT_URI}/:accountUuid`)
  getAccount(@Param(':accountUuid') accountId: string) {
    return this.acccountService.getAccount();
  }

  @Post(`${ConstantsService.ACCOUNT_URI}/:accountUuid`)
  createAccount(@Param(':accountUuid') accountId: string) {
    return this.acccountService.getAccount();
  }

  @Put(`${ConstantsService.ACCOUNT_URI}/:accountUuid`)
  updateAccount(@Param(':accountUuid') accountId: string) {
    return this.acccountService.getAccount();
  }

  @Delete(`${ConstantsService.ACCOUNT_URI}/:accountUuid`)
  deleteAccount(@Param(':accountUuid') accountId: string) {
    return this.acccountService.getAccount();
  }
}
