import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../users/user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    forwardRef(() => UserModule),
    JwtModule,
    PassportModule
  ],
  controllers: [],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
