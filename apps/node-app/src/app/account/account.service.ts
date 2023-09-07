import { Inject, Injectable } from '@nestjs/common';
import { CreateAccountDto, UpdateAccountDto } from './types/account.dto';
import { DatabaseModule } from '../database.module';
import { Account } from './types/account.model';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account)
    private readonly accountModel: typeof Account

  ){}
  
  getAccount(accountUuid: string): Promise<Account> {
    return this.accountModel.findOne({
      where:{
        accountUuid
      }
    });
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
