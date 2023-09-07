import { Module } from '@nestjs/common';
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
import { ActionController } from './actions/actions.controller';
import { ActionService } from './actions/actions.service';
import { ScheduleModule } from '@nestjs/schedule';
import { JobsModule } from './jobs/jobs.module';
import { AccountModule } from './account/account.module';
import { UserModule } from './users/user.module';
import { BillingModule } from './billing/billing.module';

@Module({
  imports: [
    DatabaseModule, 
    ConfigModule, 
    HttpModule, 
    ProxyModule, 
    ConstantsModule, 
    ScheduleModule.forRoot(),
    JobsModule,
    AccountModule,
    UserModule,
    BillingModule,
  ],
  controllers: [ 
    ActionController, 
    UsersController, 
    BillingController, 
    AccountController
  ],
  providers: [
    AppService, 
    ProxyService, 
    ConstantsService, 
    ActionService,
  ],
})
export class AppModule {}
