import { BillingType } from "./billingInfo.type";
import { Table, Column, Model } from 'sequelize-typescript';


@Table
export class BillingInfo extends Model {
    @Column
    billingAccount: string;
    @Column
    billingType: string;
    @Column
    billingDetailsMisc: string;
}