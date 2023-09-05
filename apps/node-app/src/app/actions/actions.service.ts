import { Injectable } from '@nestjs/common';
import BillingInfo from '../billing/types/billingInfo.type';
import Account from '../account/types/account.type';

@Injectable()
export class ActionService {
  getAccountTransactions(): BillingInfo {
    return;
  }
  billAnAccount(): Account {
    return;
  }
  refundAnAccount(): Account {
    return;
  }
}
