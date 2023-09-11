import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique, Default, IsUUID, HasMany, BelongsToMany } from 'sequelize-typescript';
import { CreateUserDto } from './user.dto';
import { v4 as uuidv4 } from 'uuid';
import { Account } from '../../account/types/account.model';
import { UserAccount } from './userAccount.model';


@Table
export class User extends Model {

    @AutoIncrement
    @PrimaryKey
    @Column
    id: number;

    @Column
    username: string;

    @Column
    firstname: string;
    
    @Column
    lastname: string;
    
    @IsUUID(4)
    @Column({    
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: DataType.UUIDV4,
        allowNull: false
    })
    userUuid: string;
    
    @Column
    email: string;
    
    @Column
    description: string

    @BelongsToMany(() => Account, () => UserAccount)
    accounts: Account[];

}

