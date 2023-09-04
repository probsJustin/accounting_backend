
import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from './config.module';
import { ConfigService } from '@nestjs/config';

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
        password: 'test',
        database: 'example',
        autoLoadModels: true,
        synchronize: true,
      }),
      inject: [ConfigService], // Inject the ConfigService to be used in the useFactory function
    }),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
