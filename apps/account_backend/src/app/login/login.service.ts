import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';
import { InjectModel } from '@nestjs/sequelize';
import { LoginModel } from './types/login.model'
import { LoginDto } from './types/login.dto';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel(LoginModel)
    private readonly loginModel: typeof LoginModel

  ){}
    login(loginInfo: LoginDto){
        return true;
    }
    logout(loginInfo: LoginDto){
        return true;
    }
    checkLogin(loginInfo: LoginDto){
        return true;
    }
}
