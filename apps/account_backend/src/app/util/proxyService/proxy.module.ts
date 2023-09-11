import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ProxyService } from './proxy.service';
import { ConstantsService } from '../constants/constants.service';
import { ConstantsModule } from '../constants/constants.module';

@Module({
  imports: [HttpModule, ConstantsModule],  // Import HttpModule to make HttpService available to ProxyService
  providers: [ProxyService, ConstantsService],  // Make ProxyService and InternalConstants available for injection
  exports: [ProxyService],  // Allow other modules to use ProxyService
})
export class ProxyModule {}