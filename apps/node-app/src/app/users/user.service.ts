import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(): { message: string } {
    return ({ message: 'Hello API' });
  }
}
