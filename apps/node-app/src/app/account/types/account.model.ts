import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique, Default, IsUUID, BelongsToMany, HasMany, ForeignKey } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../users/types/user.model';
import { UserAccount } from '../../users/types/userAccount.model';
import { BillingInfo } from '../../billing/types/billingInfo.model';
import { Transaction } from '../../transactions/types/transactions.model';


@Table
export class Account extends Model{

    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    emergencyContact: string;
    
    @Column
    balance: number;

    @IsUUID(4)
    @Column({    
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: DataType.UUIDV4,
        allowNull: false
    })
    accountUuid: string;
    
    @Column
    accountName: string;
    
    @Column
    billingHistory: string;
    
    @Column
    initEmail: string;
    
    @Column({ type: DataType.TEXT })
    description: string;
    
    @BelongsToMany(() => User, () => UserAccount)
    users: User[];

    @HasMany(() => BillingInfo, 'accountUuid')
    billingInfo: BillingInfo[];

    @HasMany(() => Transaction, 'accountUuid')
    transaction: Transaction[]; 

}


