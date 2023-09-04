import { Injectable } from '@nestjs/common';
import { ProxyService } from './proxyService/proxy.service';


@Injectable()
export class AppService {
  constructor(
    private proxyService: ProxyService
  ){

  }
  async getData(): Promise<{ message: string }> {
    await this.proxyService.forwardRequest('POST', 'https://webhook.site/fdaef537-1a29-4788-985f-db305ceb7f69');
    return ({ message: 'Hello API' });
  }
}
