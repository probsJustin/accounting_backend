import { Injectable, Inject, UnauthorizedException, forwardRef } from '@nestjs/common';
import { UserService } from '../users/user.service'; // Assuming there's a UsersService that interacts with the user data storage.
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from '../users/types/user.model';


@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService)) private userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  // This function was referenced in the JWT strategy. It validates the user based on the JWT payload.
  async validateUser(payload: any): Promise<any> {
    // Typically, you'd check for the user's existence based on the JWT payload.
    // E.g., if the payload contains a `username`, you'd fetch the user by that username.
    return await this.userService.findOneByUsername(payload.username);
  }

  // A function to validate user's credentials and generate a JWT if they are valid.
  async login(user: any) {
    const dbUser = await this.userService.findOneByUsername(user.username);
    if (dbUser && await bcrypt.compare(user.password, dbUser.password)) {
      const payload = { username: dbUser.username, sub: dbUser.userUuid };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  // (Optional) A function to handle user registration, which would involve hashing the password.
  async register(user: User, accountUuid: string) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const createdUser = await this.userService.createUser({
      ...user,
      password: hashedPassword,
      accounts: [accountUuid]
    });
    return createdUser;
  }

  async generateJwt(user: User) {
    const payload = { username: user.username }; // or whatever you want to encode
    const token = this.jwtService.sign(payload);
    console.log(token)
    return token;
  }

  async hashPassword(password: string){
    return await bcrypt.hash(password, 10); // Use a salt round of 10 or more
  }

  async hashToken(token: string){
    return await bcrypt.hash(token, 10); // Use a salt round of 10 or more
  }

  async checkPassword(sentPassword: string, storedHashedPassword: string){
    return await bcrypt.compare(sentPassword, storedHashedPassword);
  }

}
