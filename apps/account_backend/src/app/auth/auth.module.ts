import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../users/user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: 'f$4Hd*Gh9&kL1@!7zXv8^Qw5%Er6',  // your secret key
      signOptions: { expiresIn: '60m' }, // if you want to set token expiration
    }),
    PassportModule
  ],
  controllers: [],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
