import { Injectable } from '@nestjs/common';
import { ProxyService } from './proxyService/proxy.service';


@Injectable()
export class AppService {
  constructor(
    private proxyService: ProxyService
  ){

  }
  async getData(): Promise<{ message: string }> {
    await this.proxyService.forwardRequest('webhook', 'POST', 'https://example.com');
    await this.proxyService.forwardRequest('log', 'POST', 'https://example.com');
    return ({ message: 'Hello API' });
  }
}
