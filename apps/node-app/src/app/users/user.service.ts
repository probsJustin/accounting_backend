import { Injectable } from '@nestjs/common';
import User from './types/user.type';

@Injectable()
export class UserService {
  getUser(userId: string): string {
    return userId;
  }
  updateUser(userId: string): string {
    return userId;
  }
  createUser(userId: string): string {
    return userId;
  }
  deleteUser(userId: string) {
    return userId;
  }
}
