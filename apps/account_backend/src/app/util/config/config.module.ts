import { Module } from '@nestjs/common';
import { AppConfigService } from './config.service';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [AppConfigService],
  exports: [AppConfigService], // Export the service so it can be imported by other modules.
})
export class AppConfigModule {}
