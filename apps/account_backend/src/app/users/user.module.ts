import { Module } from '@nestjs/common';

import { UsersController } from './user.controller';
import { UserService } from './user.service'
import { User } from './types/user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Account } from '../account/types/account.model';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Account]) // Register Account model with Sequelize
  ],
  controllers: [UsersController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
