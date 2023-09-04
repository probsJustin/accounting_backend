import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true, // This makes the ConfigModule global, similar to what we did with the DatabaseModule
      envFilePath: ['.env'], // This specifies the path to the .env file
      // If you want to use validation or transformations, you can provide them here
    }),
  ],
  exports: [NestConfigModule],
})
export class ConfigModule {}