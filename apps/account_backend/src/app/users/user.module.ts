import { Module, forwardRef } from '@nestjs/common';

import { UsersController } from './user.controller';
import { UserService } from './user.service'
import { User } from './types/user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Account } from '../account/types/account.model';
import { AuthModule } from '../auth/auth.module';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Account]), // Register Account model with Sequelize
    forwardRef(() => AuthModule),
  ],
  controllers: [UsersController],
  providers: [UserService, JwtService],
  exports: [UserService]
})
export class UserModule {}
