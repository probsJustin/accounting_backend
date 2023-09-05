import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { ConstantsService } from '../util/constants/constants.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './types/user.dto';
import { LogParams } from '../util/logParams/logParams.decorator';

@ApiTags('Users')
@Controller(`${ConstantsService.USER_URI}`)
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get(`/:userUuid`)
  @LogParams()
  @ApiOperation({ summary: 'Get User' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  getUser(@Param('userUuid') userId: string) {
    return this.userService.getUser(userId);
  }

  @Post(`/:userUuid`)
  @LogParams()
  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  createUser(
    @Param('userUuid') userId: string,
    @Body() createUserDto: CreateUserDto 
    ) {
    return this.userService.createUser(userId);
  }

  @Put(`/:userUuid`)
  @LogParams()
  @ApiOperation({ summary: 'Update User' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  updateUser(
    @Param('userUuid') userId: string,
    @Body() updateUserDto: UpdateUserDto
    ) {
    return this.userService.updateUser(userId);
  }

  @Delete(`/:userUuid`)
  @LogParams()
  @ApiOperation({ summary: 'Delete User' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  deleteUser(@Param('userUuid') userId: string) {
    return this.userService.deleteUser(userId);
  }
}
