import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Req, Session } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';
import { InjectModel } from '@nestjs/sequelize';
import { LoginModel } from './types/login.model'
import { LoginDto } from './types/login.dto';
import { Request } from 'express';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel(LoginModel)
    private readonly loginModel: typeof LoginModel

  ){}
    login(session: Record<string, any>, loginInfo: LoginDto) {
        // Your login logic here. If login is successful:
        session.isLoggedIn = true;
        return true;
    }

    logout(session: Record<string, any>, loginInfo: LoginDto) {
        session.isLoggedIn = false;
        return true;
    }

    checkLogin(session: Record<string, any>, loginInfo: LoginDto): boolean{
        return session.isLoggedIn || false;
    }
}
