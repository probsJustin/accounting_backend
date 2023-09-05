import { Injectable } from '@nestjs/common';
import Account from './types/account.type';
import { CreateAccountDto, UpdateAccountDto } from './types/account.dto';

@Injectable()
export class AccountService {
  
  getAccount(accountUuid: string): Account {
    return;
  }
  updateAccount(accountUuid: string, updateAccount: UpdateAccountDto): Account {
    return;
  }
  createAccount(accountUuid: string, createAccount: CreateAccountDto): Account {
    return;
  }
  deleteAccount(accountUuid: string) {
    return;
  }
}
