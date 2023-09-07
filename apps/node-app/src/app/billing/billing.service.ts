import { Inject, Injectable } from '@nestjs/common';
import { CreateBillingInfo, UpdateBillingInfo } from './types/billingInfo.dto';
import { BillingInfo } from './types/billingInfo.model';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BillingService {
  constructor(
    @InjectModel(BillingInfo)
    private readonly billingModel: typeof BillingInfo
  ){}

  getBillingInformation(accountUuid: string): Promise<BillingInfo> {
    return this.billingModel.findOne({
      where: {
        accountUuid
      }
    });
  }
  createBillingInformation(accountUuid: string, createBillingInfo: CreateBillingInfo): Promise<BillingInfo> {
    return this.billingModel.create({createBillingInfo});
  }

  async updateBillingInformation(accountUuid: string, updateBillingInfo: UpdateBillingInfo): Promise<BillingInfo> {
    const rowCount = await this.billingModel.update(updateBillingInfo, {
      where:{
        accountUuid
      }
    })
    if(rowCount?.length > 0){
      return this.billingModel.findOne({
        where: {
          accountUuid
        }
      });
    }else{
      throw new PageNotFoundError(`No Account Found...... None updated....`)
    }
  }

  deleteBillingInformation(accountUuid: string): Promise<number> {
    return this.billingModel.destroy({
      where:{
        accountUuid 
      }
    });
  }
}
