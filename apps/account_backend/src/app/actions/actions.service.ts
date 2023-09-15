import { Injectable } from '@nestjs/common';
import { BillAnAccountDto, RefundAnAccountDto } from './types/actions.dto';
import { ProxyService } from '../util/proxyService/proxy.service';
import { AppConfigService } from '../util/config/config.service';

@Injectable()
export class ActionService {
  constructor(private readonly proxyService: ProxyService,
    private readonly appConfigService: AppConfigService
    ){

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

  async testExampleRequest(): Promise<{ message: string, databaseEnv: string }> {
    await this.proxyService.forwardRequest('webhook', 'POST', 'https://example.com');
    //await this.proxyService.forwardRequest('log', 'POST', 'https://example.com');
    return ({ message: 'Hello World API', databaseEnv: this.appConfigService.get('DB_NAME') });
  }
}
