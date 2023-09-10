import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto, UpdateAccountDto } from './types/account.dto';
import { DatabaseModule } from '../database.module';
import { Account } from './types/account.model';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../users/types/user.model';
import { BillingInfo } from '../billing/types/billingInfo.model';
import { Transaction } from '../transactions/types/transactions.module';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account)
    private readonly accountModel: typeof Account

  ){}

  getAllTransactionsForAccount(accountUuid: string): Promise<Account> {
    return this.accountModel.findOne({
      where: {
        accountUuid
      },
      include: [
        {
          model: Transaction,
          as: 'transactions',  // This alias should match what you've defined in your associations (if you've defined any).
          through: {
            attributes: [],  // This will exclude the intermediary table's columns in the result. Remove this line if you want to see them.
          },
        }
      ]
    });
  }
  
  getAllBillingInfoForAccount(accountUuid: string): Promise<Account> {
    return this.accountModel.findOne({
      where: {
        accountUuid
      },
      include: [
        {
          model: BillingInfo,
          as: 'billingInfo',  // This alias should match what you've defined in your associations (if you've defined any).
          through: {
            attributes: [],  // This will exclude the intermediary table's columns in the result. Remove this line if you want to see them.
          },
        }
      ]
    });
  }

  getAllUsersForAccount(accountUuid: string): Promise<Account> {
    return this.accountModel.findOne({
      where: {
        accountUuid
      },
      include: [
        {
          model: User,
          as: 'users',  // This alias should match what you've defined in your associations (if you've defined any).
          through: {
            attributes: [],  // This will exclude the intermediary table's columns in the result. Remove this line if you want to see them.
          },
        }
      ]
    });
  }

  async getAccount(accountUuid: string): Promise<Account> {
    const account = await this.accountModel.findOne({
      where:{
        accountUuid
      }
    });
    if(account){
      return account;
    }else{
      throw new NotFoundException(`Could not find an account with that UUID`);
    }
  }
  
  async updateAccount(accountUuid: string, updateAccount: UpdateAccountDto): Promise<Account> {
    const rowCount = await this.accountModel.update(UpdateAccountDto, {
      where: {
        accountUuid
      }
    });
    if(rowCount?.length > 0){
      return this.accountModel.findOne({
        where:{
          accountUuid
        }
      });
    }else{
      throw new PageNotFoundError(`No Account Found...... None updated....`)
    }  
  }

  createAccount(createAccount: CreateAccountDto): Promise<Account> {
    return this.accountModel.create({
      ...createAccount
    });
  }

  deleteAccount(accountUuid: string): Promise<number> {
    return this.accountModel.destroy({
      where: {
        accountUuid
      }
    });  
  }
}
