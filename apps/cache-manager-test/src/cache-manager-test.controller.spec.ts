import { Test, TestingModule } from '@nestjs/testing';
import { CacheManagerTestController } from './cache-manager-test.controller';
import { CacheManagerTestService } from './cache-manager-test.service';

describe('CacheManagerTestController', () => {
  let cacheManagerTestController: CacheManagerTestController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CacheManagerTestController],
      providers: [CacheManagerTestService],
    }).compile();

    cacheManagerTestController = app.get<CacheManagerTestController>(CacheManagerTestController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cacheManagerTestController.getHello()).toBe('Hello World!');
    });
  });
});
