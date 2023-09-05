
import BillingHistory from '../../billing/types/billingHistory.type';
import BillingInfo from '../../billing/types/billingInfo.type';
import User from '../../users/types/user.type';

export default interface Account {
    emergencyContact: User,
    accountUuid: string,
    accountName: string,
    billingHistory: BillingHistory,
    billingInfo: BillingInfo,
    initEmail: string,
    description: string,
    admins: User[],
    users: User[],
}