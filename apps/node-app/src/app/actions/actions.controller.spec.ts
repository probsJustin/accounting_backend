import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './billing.controller';
import { AppService } from './billing.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({message: 'Hello API'});
    });
  });
});
