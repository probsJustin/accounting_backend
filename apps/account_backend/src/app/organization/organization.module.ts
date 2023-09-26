import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrganizationController } from './organization.controller';
import { Organization } from './types/organization.model';
import { OrganizationService } from './organization.service';

@Module({
  imports: [ 
  SequelizeModule.forFeature([Organization])
],
  controllers: [OrganizationController],
  providers: [OrganizationService],
  exports: [OrganizationService]
})
export class OrganizationModule {}
