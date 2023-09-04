import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

import { UserService } from './user.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser() {
    return this.userService.getUser();
  }

  @Post()
  createUser() {
    return this.userService.getUser();
  }

  @Put()
  updateUser() {
    return this.userService.getUser();
  }

  @Delete()
  deleteUser() {
    return this.userService.getUser();
  }
}
