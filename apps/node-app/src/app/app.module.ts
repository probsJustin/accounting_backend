import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { ConfigModule } from './config.module';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ProxyService } from '../app/proxyService/proxy.service';
import { ProxyModule } from './proxyService/proxy.module';
import { ConstantsModule } from './constants/constants.module';
import { ConstantsService } from './constants/constants.service';

@Module({
  imports: [DatabaseModule, ConfigModule, HttpModule, ProxyModule, ConstantsModule],
  controllers: [AppController],
  providers: [AppService, ProxyService, ConstantsService],
})
export class AppModule {}
