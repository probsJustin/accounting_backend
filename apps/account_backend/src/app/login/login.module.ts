import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LoginModel } from './types/login.model';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports: [
    SequelizeModule.forFeature([LoginModel])
],
  controllers: [LoginController],
  providers: [LoginService],
  exports: [LoginService]
})
export class LoginModule {}
