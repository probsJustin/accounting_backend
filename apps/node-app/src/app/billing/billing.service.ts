import { Injectable } from '@nestjs/common';
import BillingInfo from './types/billingInfo.type';
import { CreateBillingInfo, UpdateBillingInfo } from './types/BillingInfo.dto';

@Injectable()
export class BillingService {
  getBillingInformation(accountUuid: string): string {
    return accountUuid;
  }
  createBillingInformation(accountUuid: string, createBillingInfo: CreateBillingInfo): string {
    return accountUuid;
  }
  updateBillingInformation(accountUuid: string, updateBillingInfo: UpdateBillingInfo): string {
    return accountUuid;
  }
  deleteBillingInformation(accountUuid: string) {
    return accountUuid;
  }
}
