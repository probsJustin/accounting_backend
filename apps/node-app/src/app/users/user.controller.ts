import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { ConstantsService } from '../util/constants/constants.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './types/user.dto';

@ApiTags('Users')
@Controller()
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get(`${ConstantsService.USER_URI}/:userUuid`)
  @ApiOperation({ summary: 'Get Billing Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  getUser(@Param(':userUuid') userId: string) {
    return this.userService.getUser();
  }

  @Post(`${ConstantsService.USER_URI}/:userUuid`)
  @ApiOperation({ summary: 'Create Billing Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  createUser(
    @Param(':userUuid') userId: string,
    @Body() createUserDto: CreateUserDto 
    ) {
    return this.userService.getUser();
  }

  @Put(`${ConstantsService.USER_URI}/:userUuid`)
  @ApiOperation({ summary: 'Update Billing Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  updateUser(
    @Param(':userUuid') userId: string,
    @Body() updateUserDto: UpdateUserDto
    ) {
    return this.userService.getUser();
  }

  @Delete(`${ConstantsService.USER_URI}/:userUuid`)
  @ApiOperation({ summary: 'Delete Billing Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  deleteUser(@Param(':userUuid') userId: string) {
    return this.userService.getUser();
  }
}
