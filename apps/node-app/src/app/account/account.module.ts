import { Module } from '@nestjs/common';

import { AccountController } from './account.controller';
import { AccountService } from '../account/account.service';
import { Account } from './types/account.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [ 
  SequelizeModule.forFeature([Account])
],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [AccountService]
})
export class AccountModule {}
