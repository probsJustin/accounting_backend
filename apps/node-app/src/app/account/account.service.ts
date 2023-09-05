import { Injectable } from '@nestjs/common';
import Account from './types/account.type';
import { CreateAccountDto, UpdateAccountDto } from './types/account.dto';

@Injectable()
export class AccountService {
  
  getAccount(accountUuid: string): string {
    return accountUuid;
  }
  updateAccount(accountUuid: string, updateAccount: UpdateAccountDto): string {
    return accountUuid;
  }
  createAccount(accountUuid: string, createAccount: CreateAccountDto): string {
    return accountUuid;
  }
  deleteAccount(accountUuid: string) {
    return accountUuid;
  }
}
