import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  getAccount(): { message: string } {
    return ({ message: 'Hello API' });
  }
}
