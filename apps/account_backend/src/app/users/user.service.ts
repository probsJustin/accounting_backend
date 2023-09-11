import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { User } from './types/user.model';
import { CreateUserDto, UpdateUserDto } from './types/user.dto';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';
import { InjectModel } from '@nestjs/sequelize';
import { Account } from '../account/types/account.model';
import { Op } from 'sequelize';


@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) 
    private readonly usersModel: typeof User,
    @InjectModel(Account) 
    private readonly accountModel: typeof Account
  ){}

  async getUser(userUuid: string): Promise<User> {
    const user = await this.usersModel.findOne({
      where: {
        userUuid
      }
    });
    if(user){
      return user;
    }else{
      throw new NotFoundException(`Could not find an user with that UUID`);
    }
  }
  
  async updateUser(userUuid: string, updateUserDto: UpdateUserDto ): Promise<User> {
    let updatedUser;
    const rowCount = await this.usersModel.update(updateUserDto, {
      where: {
        userUuid
      }
    }); 
    if(rowCount?.length > 0){
      updatedUser = await this.usersModel.findOne({
        where: {
          userUuid
        }
      });
    } else{
      throw new PageNotFoundError(`No User Found...... None updated....`)
    }
    const associatedUser = this.associateUserWithAccount(updatedUser.userUuid, updateUserDto.accounts);
    return associatedUser;
  }
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.usersModel.create({ 
      ...createUserDto
    });
    const associatedUser = this.associateUserWithAccount(createdUser.userUuid, createUserDto.accounts);
    return associatedUser;
  }

  deleteUser(userUuid: string): Promise<number> {
    return this.usersModel.destroy({
      where:{
        userUuid
      }
    });
  }

  async associateUserWithAccount(userUuid: string, accountUuids: string[]){
      // Step 1: Create the user
    const newUser = await this.usersModel.findOne({
      where: {
        userUuid
      }
    });

    // Step 2: Associate the user with the desired accounts
    const accountsToAssociate = await this.accountModel.findAll({
      where: {
        accountUuid:{
          [Op.in]: accountUuids
        }
      }
    });

    await newUser.$set('accounts', accountsToAssociate);

    return newUser;
  }
}
