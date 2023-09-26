import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';
import { InjectModel } from '@nestjs/sequelize';
import { Organization } from './types/organization.model'
import { CreateOrganizationDto, UpdateOrganizationDto } from './types/organization.dto';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectModel(Organization)
    private readonly organizationModel: typeof Organization

  ){}

  async getOrganization(accountUuid: string): Promise<Organization> {
    const organization = await this.organizationModel.findOne({
      where:{
        accountUuid
      }
    });
    if(organization){
      return organization;
    }else{
      throw new NotFoundException(`Could not find an account with that UUID`);
    }
  }
  
  async updateOrganization(accountUuid: string, updateOrganizationDto: UpdateOrganizationDto): Promise<Organization> {
    const rowCount = await this.organizationModel.update(updateOrganizationDto, {
      where: {
        accountUuid
      }
    });
    if(rowCount?.length > 0){
      return this.organizationModel.findOne({
        where:{
          accountUuid
        }
      });
    }else{
      throw new PageNotFoundError(`No Account Found...... None updated....`)
    }  
  }

  createOrganization(createOrganizationDto: CreateOrganizationDto): Promise<Organization> {
    return this.organizationModel.create({
      ...createOrganizationDto
    });
  }

  deleteOrganization(accountUuid: string): Promise<number> {
    return this.organizationModel.destroy({
      where: {
        accountUuid
      }
    });  
  }
}
