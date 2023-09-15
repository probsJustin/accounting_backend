import { Module } from '@nestjs/common';
import { BackupService } from './backup.serivce';
import { ScheduleModule } from '@nestjs/schedule';
import { AppConfigModule } from '../util/config/config.module';

@Module({
  imports: [AppConfigModule, ScheduleModule.forRoot()],
  providers: [BackupService],
})
export class BackupModule {}