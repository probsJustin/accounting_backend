import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { ConstantsService } from '../util/constants/constants.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './types/user.dto';
import { LogParamsInterceptor } from '../util/logParams/logParams.ineceptor';

@ApiTags('Users')
@Controller(`${ConstantsService.USER_URI}`)
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get(`/:userUuid`)
  @ApiOperation({ summary: 'Get User' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @UseInterceptors(LogParamsInterceptor)
  getUser(@Param('userUuid') userId: string) {
    return this.userService.getUser(userId);
  }

  @Post(`/:userUuid`)
  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @UseInterceptors(LogParamsInterceptor)
  createUser(
    @Param('userUuid') userId: string,
    @Body() createUserDto: CreateUserDto 
    ) {
    return this.userService.createUser(userId);
  }

  @Put(`/:userUuid`)
  @ApiOperation({ summary: 'Update User' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @UseInterceptors(LogParamsInterceptor)
  updateUser(
    @Param('userUuid') userId: string,
    @Body() updateUserDto: UpdateUserDto
    ) {
    return this.userService.updateUser(userId);
  }

  @Delete(`/:userUuid`)
  @ApiOperation({ summary: 'Delete User' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @UseInterceptors(LogParamsInterceptor)
 //must be above the function itself
  deleteUser(@Param('userUuid') userId: string) {
    return this.userService.deleteUser(userId);
  }
}
