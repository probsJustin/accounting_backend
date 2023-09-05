import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { ConfigModule } from './config.module';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ProxyService } from './util/proxyService/proxy.service';
import { ProxyModule } from './util/proxyService/proxy.module';
import { ConstantsModule } from './util/constants/constants.module';
import { ConstantsService } from './util/constants/constants.service';
import { UsersController } from './users/user.controller';
import { BillingController } from './billing/billing.controller';
import { AccountController } from './account/account.controller';
import { UserService } from './users/user.service';
import { BillingService } from './billing/billing.service';
import { AccountService } from './account/account.service';

@Module({
  imports: [DatabaseModule, ConfigModule, HttpModule, ProxyModule, ConstantsModule],
  controllers: [AppController, UsersController, BillingController, AccountController ],
  providers: [AppService, AccountService, ProxyService, ConstantsService, UserService, BillingService],
})
export class AppModule {}
