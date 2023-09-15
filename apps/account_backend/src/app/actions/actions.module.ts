import { Module } from '@nestjs/common';
import { ActionController } from './actions.controller';
import { ActionService } from './actions.service';
import { AppConfigModule } from '../util/config/config.module';

@Module({
  imports: [
  ActionService,
  AppConfigModule
],
  controllers: [ActionController],
  providers: [ActionService],
})
export class ActionModule {}
