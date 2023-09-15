import { Module } from '@nestjs/common';
import { BackupService } from './backup.serivce';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [BackupService],
})
export class BackupModule {}