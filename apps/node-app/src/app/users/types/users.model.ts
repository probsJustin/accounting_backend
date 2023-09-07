import { Table, Column, Model } from 'sequelize-typescript';
import { CreateUserDto } from './user.dto';


@Table
export class User extends Model {

    @Column
    username: string;

    @Column
    firstname: string;
    
    @Column
    lastname: string;
    
    @Column
    userUuid: string;
    
    @Column
    email: string;
    
    @Column
    description: string
}

