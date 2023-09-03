import { Controller, Get } from '@nestjs/common';

import { AppService } from './billing.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
