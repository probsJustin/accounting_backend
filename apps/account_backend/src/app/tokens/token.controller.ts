import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';
import { ConstantsService } from '../util/constants/constants.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LogParamsInterceptor } from '../util/logParams/logParams.ineceptor';
import { TokenService } from './token.service';
import { CreateTokenDto, DeleteTokenDto, GetTokenDto, UpdateTokenDto } from './types/token.dto';

@ApiTags('Tokens')
@Controller(`${ConstantsService.TOKEN_URI}`)
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post(`/getToken`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Get Token Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  getToken(@Body() getTokenDto: GetTokenDto) {
    return this.tokenService.getToken(getTokenDto);
  }

  @Post(`/createToken`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Create Token Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  createToken(
    @Body() createTokenDto: CreateTokenDto
    ) {
    return this.tokenService.createToken(createTokenDto);
  }

  @Put(`/updateToken`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Update Token Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  updateToken(
    @Body() updateTokenDto: UpdateTokenDto
    ) {
    return this.tokenService.updateToken(updateTokenDto.tokenUuid ,updateTokenDto);
  }

  @Post(`/deleteToken`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Delete Token Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  deleteToken(
    @Body() deleteTokenDto: DeleteTokenDto
    ) {
    return this.tokenService.deleteToken(deleteTokenDto);
  }
}
