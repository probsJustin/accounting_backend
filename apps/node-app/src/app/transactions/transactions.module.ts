import { Module } from '@nestjs/common';
import { AccountService } from '../account/account.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TransactionService } from './transactions.service';
import { TransactionController } from './transactions.controller';
import { Transaction } from './types/transactions.model';

@Module({
  imports: [ 
  SequelizeModule.forFeature([Transaction])
],
  controllers: [TransactionController],
  providers: [TransactionService],
  exports: [TransactionService]
})
export class TransactionModule {}
