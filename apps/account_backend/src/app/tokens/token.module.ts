import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { Token } from './types/token.model';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../users/user.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Token]),
    AuthModule,
    UserModule
],
  controllers: [TokenController],
  providers: [TokenService],
  exports: [TokenService]
})
export class TokenModule {}
