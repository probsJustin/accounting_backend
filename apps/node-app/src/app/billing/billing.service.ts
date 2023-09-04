import { Injectable } from '@nestjs/common';

@Injectable()
export class BillingService {
  getBillingInformation(): { message: string } {
    return ({ message: 'Hello API' });
  }
}
