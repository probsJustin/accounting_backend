import { Module } from '@nestjs/common';
import { AppConfigService } from './config.service';

@Module({
  providers: [AppConfigService],
  exports: [AppConfigService], // Export the service so it can be imported by other modules.
})
export class AppConfigModule {}
