import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AccountService } from './account.service';
import { ConstantsService } from '../constants/constants.service';

@Controller()
export class AccountController {
  constructor(
    private readonly acccountService: AccountService,
    ) {}

  @Get(ConstantsService.ACCOUNT_URI)
  getAccount() {
    return this.acccountService.getAccount();
  }

  @Post(ConstantsService.ACCOUNT_URI)
  createAccount() {
    return this.acccountService.getAccount();
  }

  @Put(ConstantsService.ACCOUNT_URI)
  updateAccount() {
    return this.acccountService.getAccount();
  }

  @Delete(ConstantsService.ACCOUNT_URI)
  deleteAccount() {
    return this.acccountService.getAccount();
  }
}
