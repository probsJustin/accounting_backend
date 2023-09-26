import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique, Default, IsUUID, BelongsToMany, HasMany, ForeignKey } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../users/types/user.model';
import { UserAccount } from '../../users/types/userAccount.model';
import { BillingInfo } from '../../billing/types/billingInfo.model';
import { Transaction } from '../../transactions/types/transactions.model';


@Table
export class Organization extends Model{

    @Column
    emergencyContact: string;

    @IsUUID(4)
    @Column({    
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: DataType.UUIDV4,
        allowNull: false
    })
    orgUuid: string;
    
    @Column
    orgName: string;
    
    @Column
    accountUuid: string;

}


