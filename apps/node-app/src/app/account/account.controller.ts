import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller()
export class AppController {
  constructor(private readonly acccountService: AccountService) {}

  @Get()
  getAccount() {
    return this.acccountService.getAccount();
  }

  @Post()
  createAccount() {
    return this.acccountService.getAccount();
  }

  @Put()
  updateAccount() {
    return this.acccountService.getAccount();
  }

  @Delete()
  deleteAccount() {
    return this.acccountService.getAccount();
  }
}
