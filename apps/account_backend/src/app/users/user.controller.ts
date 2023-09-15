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
  getUser(@Param('userUuid') userUuid: string) {
    return this.userService.getUser(userUuid);
  }
  
  @Get(`/:userUuid/tokens`)
  @ApiOperation({ summary: 'Get User' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @UseInterceptors(LogParamsInterceptor)
  getUserWithTokens(@Param('userUuid') userUuid: string) {
    return this.userService.getUserWithTokens(userUuid);
  }

  @Post()
  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @UseInterceptors(LogParamsInterceptor)
  createUser(
    @Body() createUserDto: CreateUserDto 
    ) {
    return this.userService.createUser(createUserDto);
  }

  @Put(`/:userUuid`)
  @ApiOperation({ summary: 'Update User' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @UseInterceptors(LogParamsInterceptor)
  updateUser(
    @Param('userUuid') userUuid: string,
    @Body() updateUserDto: UpdateUserDto
    ) {
    return this.userService.updateUser(userUuid, updateUserDto);
  }

  @Delete(`/:userUuid`)
  @ApiOperation({ summary: 'Delete User' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  @UseInterceptors(LogParamsInterceptor)
  deleteUser(@Param('userUuid') userUuid: string) {
    return this.userService.deleteUser(userUuid);
  }
}
