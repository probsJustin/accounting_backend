import { Module } from '@nestjs/common';

import { UsersController } from './user.controller';
import { UserService } from './user.service'
import { User } from './types/users.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forFeature([User]) // Register Account model with Sequelize
  ],
  controllers: [UsersController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
