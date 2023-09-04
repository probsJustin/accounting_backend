import { Module } from '@nestjs/common';

import { AccountController } from './account.controller';
import { AccountService } from '../account/account.service';

@Module({
  imports: [ AccountService ],
  controllers: [AccountController],
  providers: [ AccountService ],
})
export class AccountModule {}
