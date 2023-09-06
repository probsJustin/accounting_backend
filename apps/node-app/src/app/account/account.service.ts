import { Inject, Injectable } from '@nestjs/common';
import { CreateAccountDto, UpdateAccountDto } from './types/account.dto';
import { DatabaseModule } from '../database.module';
import { Account } from './types/account.model';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';

@Injectable()
export class AccountService {
  constructor(
    @Inject('Account') private readonly accountModule: typeof Account
  ){}
  
  getAccount(accountUuid: string): Promise<Account> {
    return this.accountModule.findOne({
      where:{
        accountUuid
      }
    });
  }
  
  async updateAccount(accountUuid: string, updateAccount: UpdateAccountDto): Promise<Account> {
    const rowCount = await this.accountModule.update(UpdateAccountDto, {
      where: {
        accountUuid
      }
    });
    if(rowCount?.length > 0){
      return this.accountModule.findOne({
        where:{
          accountUuid
        }
      });
    }else{
      throw new PageNotFoundError(`No Account Found...... None updated....`)
    }  
  }

  createAccount(createAccount: CreateAccountDto): Promise<Account> {
    return this.accountModule.create({
      CreateAccountDto
    });
  }

  deleteAccount(accountUuid: string): Promise<number> {
    return this.accountModule.destroy({
      where: {
        accountUuid
      }
    });  
  }
}
