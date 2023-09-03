import { Module } from '@nestjs/common';

import { AppController } from './account.controller';
import { AppService } from './account.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
