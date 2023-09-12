import { Injectable, UnauthorizedException } from '@nestjs/common';
//import { UsersService } from '../users/users.service'; // Assuming there's a UsersService that interacts with the user data storage.
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // This function was referenced in the JWT strategy. It validates the user based on the JWT payload.
  async validateUser(payload: any): Promise<any> {
    // Typically, you'd check for the user's existence based on the JWT payload.
    // E.g., if the payload contains a `username`, you'd fetch the user by that username.
    return await this.usersService.findOneByUsername(payload.username);
  }

  // A function to validate user's credentials and generate a JWT if they are valid.
  async login(user: any) {
    const dbUser = await this.usersService.findOneByUsername(user.username);
    if (dbUser && await bcrypt.compare(user.password, dbUser.password)) {
      const payload = { username: dbUser.username, sub: dbUser.userId };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  // (Optional) A function to handle user registration, which would involve hashing the password.
  async register(user: any) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const createdUser = await this.usersService.create({
      ...user,
      password: hashedPassword,
    });
    return createdUser;
  }

  async generateJwt(user: any) {
    const payload = { username: user.username, sub: user.userId }; // or whatever you want to encode
    return this.jwtService.sign(payload);
  }

  async hashPassword(password: string){
    return await bcrypt.hash(password, 10); // Use a salt round of 10 or more
  }
}
