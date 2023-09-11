import { Inject, Injectable, NotFoundException } from '@nestjs/common';
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

  async getBillingInformation(billingTableId: string): Promise<BillingInfo> {
    const billingInfo = await this.billingModel.findOne({
      where: {
        id: billingTableId
      }
    });
    if(billingInfo){
      return billingInfo;
    }else{
      throw new NotFoundException(`Could not find an user with that UUID`);
    }
  }

  async createBillingInformation(createBillingInfo: CreateBillingInfo): Promise<BillingInfo> {
    return this.billingModel.create({
      ...createBillingInfo
    });
  }

  async updateBillingInformation(billingTableId: string, updateBillingInfo: UpdateBillingInfo): Promise<BillingInfo> {
    const rowCount = await this.billingModel.update(updateBillingInfo, {
      where:{
        id: billingTableId

      }
    })
    if(rowCount?.length > 0){
      return this.billingModel.findOne({
        where: {
          id: billingTableId
        }
      });
    }else{
      throw new PageNotFoundError(`No Account Found...... None updated....`)
    }
  }

  deleteBillingInformation(billingTableId: string): Promise<number> {
    return this.billingModel.destroy({
      where:{
        id: billingTableId 
      }
    });
  }
}
