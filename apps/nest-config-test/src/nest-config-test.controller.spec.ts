import { Test, TestingModule } from '@nestjs/testing';
import { NestConfigTestController } from './nest-config-test.controller';
import { NestConfigTestService } from './nest-config-test.service';

describe('NestConfigTestController', () => {
  let nestConfigTestController: NestConfigTestController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NestConfigTestController],
      providers: [NestConfigTestService],
    }).compile();

    nestConfigTestController = app.get<NestConfigTestController>(NestConfigTestController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(nestConfigTestController.getHello()).toBe('Hello World!');
    });
  });
});
