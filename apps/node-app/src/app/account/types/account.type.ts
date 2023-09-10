
import { BillingHistory } from '../../billing/types/billingHistory.type';
import { User } from '../../users/types/user.type';

export class Account {
    emergencyContact: string;
    accountUuid: string;
    accountName: string;
    billingHistory: string;
    billingInfo: string;
    initEmail: string;
    description: string;
    admins: string;
}