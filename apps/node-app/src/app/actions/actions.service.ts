import { Injectable } from '@nestjs/common';
import BillingInfo from '../billing/types/billingInfo.type';
import Account from '../account/types/account.type';
import { BillAnAccountDto, RefundAnAccountDto } from './types/actions.dto';

@Injectable()
export class ActionService {
  getAccountTransactions(accountUuid: string): string {
    return accountUuid;
  }
  billAnAccount(accountUuid: string, billAnAccount: BillAnAccountDto ): string {
    return accountUuid;
  }
  refundAnAccount(accountUuid: string, refundAnAccount: RefundAnAccountDto): string {
    return accountUuid;
  }
}
