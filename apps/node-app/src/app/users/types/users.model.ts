import { Table, Column, Model } from 'sequelize-typescript';


@Table
export class Users extends Model {
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