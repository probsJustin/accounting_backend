import { BillingType } from "./billingInfo.type";
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique } from 'sequelize-typescript';


@Table
export class BillingInfo extends Model {
    
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    billingAccount: string;

    @Column
    billingType: string;

    @Column
    billingDetailsMisc: string;
}