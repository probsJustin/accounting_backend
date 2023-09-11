import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';
import { InjectModel } from '@nestjs/sequelize';
import { Transaction } from './types/transactions.model';
import { CreateTransactionDto, UpdateTransactionDto } from './types/transactions.dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction)
    private readonly transactionModel: typeof Transaction

  ){}
  
  

  async getTransaction(transactionId: string): Promise<Transaction> {
    const transaction = await this.transactionModel.findOne({
      where:{
        id: transactionId
      }
    });
    if(transaction){
      return transaction;
    }else{
      throw new NotFoundException(`Could not find an account with that UUID`);
    }
  }
  
  async updateTransaction(transactionId: string, udateTransactionDto: UpdateTransactionDto): Promise<Transaction> {
    const rowCount = await this.transactionModel.update(udateTransactionDto, {
      where: {
        id: transactionId
      }
    });
    if(rowCount?.length > 0){
      return this.transactionModel.findOne({
        where:{
          id: transactionId
        }
      });
    }else{
      throw new PageNotFoundError(`No Account Found...... None updated....`)
    }  
  }

  createTransaction(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    return this.transactionModel.create({
      ...createTransactionDto
    });
  }

  deleteTransaction(transactionId: string): Promise<number> {
    return this.transactionModel.destroy({
      where: {
        id: transactionId
      }
    });  
  }
}
