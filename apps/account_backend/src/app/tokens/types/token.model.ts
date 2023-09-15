import { Account } from "../../account/types/account.model";
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique, BelongsTo, ForeignKey, IsUUID } from 'sequelize-typescript';
import { User } from "../../users/types/user.model";


@Table
export class Token extends Model {

    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;
    
    @Column
    token: string;

    @IsUUID(4)
    @Column({    
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: DataType.UUIDV4,
        allowNull: false
    })
    tokenUuid: string;


    @IsUUID(4)
    @ForeignKey(() => User)
    @Column(DataType.UUID)
    userUuid: string;
    
    @BelongsTo(() => User)
    user: User;
    
    @IsUUID(4)
    @ForeignKey(() => Account)
    @Column(DataType.UUID)
    accountUuid: string;
    
    @BelongsTo(() => Account)
    account: Account;
}