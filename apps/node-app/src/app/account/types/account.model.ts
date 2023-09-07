import { Table, Column, Model } from 'sequelize-typescript';


@Table
export class Account extends Model{

    @Column
    emergencyContact: string;
    
    @Column
    accountUuid: string;
    
    @Column
    accountName: string;
    
    @Column
    billingHistory: string;
    
    @Column
    billingInfo: string;
    
    @Column
    initEmail: string;
    
    @Column
    description: string;

    @Column
    admins: string;

    @Column
    users: string;
}

