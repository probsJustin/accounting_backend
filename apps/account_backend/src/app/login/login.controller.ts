import { Controller, Get, Post, Put, Delete, Param, Body, Req, Session, UseInterceptors } from '@nestjs/common';
import { ConstantsService } from '../util/constants/constants.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LogParamsInterceptor } from '../util/logParams/logParams.ineceptor';
import { LoginService } from './login.service';
import { LoginDto } from './types/login.dto';

@ApiTags('Login')
@Controller(`${ConstantsService.ORGANIZATION_URI}`)
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
    ) {}

  @Get(`/login`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Login via the front end' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  login(
    @Body() loginDto: LoginDto,
    @Session() session: Record<string, any>   
    ) {
        const isLoggedIn = this.loginService.login(session, loginDto);
        return { isLoggedIn };
  }

  @Post(`/logout`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Logout via the front end' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  logout(
    @Body() loginDto: LoginDto,
    @Session() session: Record<string, any>
    ) {
    const isLoggedIn = this.loginService.logout(session, loginDto);
    return { isLoggedIn };
  }

  @Post(`/checkLogin`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Check login via the front end' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  checkLogin(
    @Body() loginDto: LoginDto,
    @Session() session: Record<string, any>
    ) {
    const isLoggedIn = this.loginService.checkLogin(session, loginDto);
    return { isLoggedIn };
  }
}
