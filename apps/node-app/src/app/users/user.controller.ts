import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { ConstantsService } from '../constants/constants.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller()
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get(`${ConstantsService.USER_URI}/:userUuid`)
  getUser(@Param(':userUuid') userId: string) {
    return this.userService.getUser();
  }

  @Post(`${ConstantsService.USER_URI}/:userUuid`)
  createUser(@Param(':userUuid') userId: string) {
    return this.userService.getUser();
  }

  @Put(`${ConstantsService.USER_URI}/:userUuid`)
  updateUser(@Param(':userUuid') userId: string) {
    return this.userService.getUser();
  }

  @Delete(`${ConstantsService.USER_URI}/:userUuid`)
  deleteUser(@Param(':userUuid') userId: string) {
    return this.userService.getUser();
  }
}
