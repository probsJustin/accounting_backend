import { Injectable } from '@nestjs/common';
import { BillingInfo } from '../billing/types/billingInfo.type';
import { BillAnAccountDto, RefundAnAccountDto } from './types/actions.dto';
import { ProxyService } from '../util/proxyService/proxy.service';

@Injectable()
export class ActionService {
  constructor(private readonly proxyService: ProxyService){

  }
  getAccountTransactions(accountUuid: string): string {
    return accountUuid;
  }
  billAnAccount(accountUuid: string, billAnAccount: BillAnAccountDto ): string {
    return accountUuid;
  }
  refundAnAccount(accountUuid: string, refundAnAccount: RefundAnAccountDto): string {
    return accountUuid;
  }

  async testExampleRequest(): Promise<{ message: string }> {
    await this.proxyService.forwardRequest('webhook', 'POST', 'https://example.com');
    //await this.proxyService.forwardRequest('log', 'POST', 'https://example.com');
    return ({ message: 'Hello World API' });
  }
}
