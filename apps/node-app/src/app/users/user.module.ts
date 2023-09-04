import { Module } from '@nestjs/common';

import { UsersController } from './user.controller';
import { UserService } from './user.service'

@Module({
  imports: [UserService],
  controllers: [UsersController],
  providers: [UserService],
})
export class UserModule {}
