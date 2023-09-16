
import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from './config.module';
import { ConfigService } from '@nestjs/config';
import { Account } from './account/types/account.model';
import { User } from './users/types/user.model';
import { BillingInfo } from './billing/types/billingInfo.model';
import { UserAccount } from './users/types/userAccount.model';
import { Transaction } from './transactions/types/transactions.model';
import { Token } from './tokens/types/token.model';

@Global()
@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule], // Import the ConfigModule to use ConfigService
      useFactory: async (configService: ConfigService) => ({
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'testtest',
        database: 'example',
        autoLoadModels: true,
        synchronize: true,
        models: [Account, User, BillingInfo, UserAccount, Transaction, Token], // Ensure Account model is here
      }),
      inject: [ConfigService], // Inject the ConfigService to be used in the useFactory function
    }),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
 