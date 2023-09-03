import { Module } from '@nestjs/common';

import { AppController } from './billing.controller';
import { AppService } from './billing.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
