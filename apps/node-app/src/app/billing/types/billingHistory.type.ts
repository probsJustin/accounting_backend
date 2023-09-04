
import BillingRecord from '../types/billingRecord.type';
import BillingInfo from '../types/billingInfo.type';

export default interface BillingHistory {
    emergencyContact: string,
    accountUuid: string,
    accountName: string,
    billingHistory: BillingRecord[],
    billingInfo: BillingInfo,
    initEmail: string,
    description: string,
}