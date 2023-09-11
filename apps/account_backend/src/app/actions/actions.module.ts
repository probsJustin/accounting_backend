import { Module } from '@nestjs/common';
import { ActionController } from './actions.controller';
import { ActionService } from './actions.service';

@Module({
  imports: [ActionService],
  controllers: [ActionController],
  providers: [ActionService],
})
export class ActionModule {}
