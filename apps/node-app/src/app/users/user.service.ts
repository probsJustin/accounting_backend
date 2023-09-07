import { Inject, Injectable } from '@nestjs/common';
import { User } from './types/users.model';
import { CreateUserDto, UpdateUserDto } from './types/user.dto';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) 
    private readonly usersModel: typeof User
  ){}

  getUser(userId: string): Promise<User> {
    return this.usersModel.findOne({
      where: {
        userId
      }
    });
  }
  async updateUser(userId: string, updateUserDto: UpdateUserDto ): Promise<User> {
    const rowCount = await this.usersModel.update(updateUserDto, {
      where: {
        userId
      }
    }); 
    if(rowCount?.length > 0){
      return this.usersModel.findOne({
        where: {
          userId
        }
      });
    } else{
      throw new PageNotFoundError(`No User Found...... None updated....`)
    }
  }
  createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.usersModel.create({ 
      ...createUserDto
    });
  }

  deleteUser(userId: string): Promise<number> {
    return this.usersModel.destroy({
      where:{
        userId
      }
    });
  }
}
