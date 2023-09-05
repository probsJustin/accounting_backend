import { Injectable } from '@nestjs/common';
import BillingInfo from './types/billingInfo.type';

@Injectable()
export class BillingService {
  getBillingInformation(): BillingInfo {
    return;
  }
  createBillingInformation(): BillingInfo {
    return;
  }
  updateBillingInformation(): BillingInfo {
    return;
  }
  deleteBillingInformation() {
    return;
  }
}
