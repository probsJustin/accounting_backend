import {
    Table, Column, Model, BelongsToMany, DataType, PrimaryKey, ForeignKey
  } from 'sequelize-typescript';
import { Account } from '../../account/types/account.model';
import { User } from './user.model';



@Table
export class UserAccount extends Model {
  
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Account)
  @Column
  accountId: number;
}