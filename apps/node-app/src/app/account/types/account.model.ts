import { Table, Column, Model } from 'sequelize-typescript';
import User from '../../users/types/user.type';
import BillingHistory from '../../billing/types/billingHistory.type';
import BillingInfo from '../../billing/types/billingInfo.type';

@Table
export class Account extends Model{

    @Column
    emergencyContact: User;
    @Column
    accountUuid: string;
    @Column
    accountName: string;
    @Column
    billingHistory: BillingHistory;
    @Column
    billingInfo: BillingInfo;
    @Column
    initEmail: string;
    @Column
    description: string;
    @Column
    admins: User[];
    @Column
    users: User[];
}

