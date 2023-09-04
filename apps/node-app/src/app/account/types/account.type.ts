
import BillingHistory from '../../billing/types/billingHistory.type';
import BillingInfo from '../../billing/types/billingInfo.type';
import user from '../../users/types/user.type';

export default interface Account {
    emergencyContact: user,
    accountUuid: string,
    accountName: string,
    billingHistory: BillingHistory,
    billingInfo: BillingInfo,
    initEmail: string,
    description: string,
    admins: user[],
    users: user[],
}