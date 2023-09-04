import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { ConstantsService } from '../constants/constants.service';

@Controller()
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get(ConstantsService.USER_URI)
  getUser() {
    return this.userService.getUser();
  }

  @Post(ConstantsService.USER_URI)
  createUser() {
    return this.userService.getUser();
  }

  @Put(ConstantsService.USER_URI)
  updateUser() {
    return this.userService.getUser();
  }

  @Delete(ConstantsService.USER_URI)
  deleteUser() {
    return this.userService.getUser();
  }
}
