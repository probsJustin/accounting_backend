import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';
import { ConstantsService } from '../util/constants/constants.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LogParamsInterceptor } from '../util/logParams/logParams.ineceptor';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto, UpdateOrganizationDto } from './types/organization.dto';

@ApiTags('Organization')
@Controller(`${ConstantsService.ORGANIZATION_URI}`)
export class OrganizationController {
  constructor(
    private readonly organizationService: OrganizationService,
    ) {}

  @Get(`/:accountUuid`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Get Account Information' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  getAccount(@Param('accountUuid') accountUuid: string) {
    return this.organizationService.getOrganization(accountUuid);
  }

  @Post()
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Create Account Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  createAccount(
    @Body() createOrganizationDto: CreateOrganizationDto
    ) {
    return this.organizationService.createOrganization(createOrganizationDto);
  }

  @Put(`/:accountUuid`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Update Account Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  updateAccount(
    @Param('accountUuid') accountUuid: string,
    @Body() updateOrganizationDto: UpdateOrganizationDto
    ) {
    return this.organizationService.updateOrganization(accountUuid, updateOrganizationDto);
  }

  @Delete(`/:accountUuid`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Delete Account Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  deleteAccount(@Param('accountUuid') accountUuid: string) {
    return this.organizationService.deleteOrganization(accountUuid);
  }
}
