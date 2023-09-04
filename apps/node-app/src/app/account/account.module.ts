import { Module } from '@nestjs/common';

import { AccountController } from './account.controller';
import { AppService } from '../app.service';

@Module({
  imports: [],
  controllers: [AccountController],
  providers: [AppService],
})
export class AppModule {}
