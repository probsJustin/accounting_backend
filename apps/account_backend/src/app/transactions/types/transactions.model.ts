import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique, Default, IsUUID, BelongsToMany, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../users/types/user.model';
import { UserAccount } from '../../users/types/userAccount.model';
import { BillingInfo } from '../../billing/types/billingInfo.model';
import { Account } from '../../account/types/account.model';
import { IsDateString, IsString } from 'class-validator';


@Table
export class Transaction extends Model{
    
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    amount: string;

    @Column
    type: string;
    
    @IsDateString()
    @Column
    initDate: Date;

    @IsString()
    @Column
    initEmail: string;

    @IsUUID(4)
    @ForeignKey(() => Account)
    @Column(DataType.UUID)
    accountUuid: string;
    
    @BelongsTo(() => Account)
    account: Account;
}


