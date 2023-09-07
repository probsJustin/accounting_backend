
import BillingHistory from '../../billing/types/billingHistory.type';
import BillingInfo from '../../billing/types/billingInfo.type';
import User from '../../users/types/user.type';

export default interface Account {
    emergencyContact: string,
    accountUuid: string,
    accountName: string,
    billingHistory: string,
    billingInfo: string,
    initEmail: string,
    description: string,
    admins: string,
    users: string,
}