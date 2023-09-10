import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique, Default, IsUUID, BelongsToMany, HasMany, ForeignKey } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../users/types/user.model';
import { UserAccount } from '../../users/types/userAccount.model';
import { BillingInfo } from '../../billing/types/billingInfo.model';


@Table
export class Transaction extends Model{
    
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    amount: string;
}


