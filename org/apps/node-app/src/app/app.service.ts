import { Injectable } from '@nestjs/common';
import { ProxyService } from './proxyService/proxy.service';


@Injectable()
export class AppService {
  constructor(
    private proxyService: ProxyService
  ){

  }
  getData(): { message: string } {
    this.proxyService.forwardRequest('GET', 'example.com');
    return ({ message: 'Hello API' });
  }
}
