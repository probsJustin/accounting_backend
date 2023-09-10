import { Account } from "../../account/types/account.model";
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique, BelongsTo, ForeignKey } from 'sequelize-typescript';


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
    
    @ForeignKey(() => Account)
    @Column(DataType.UUID)
    accountUuid: string;
    
    @BelongsTo(() => Account)
    account: Account;
}