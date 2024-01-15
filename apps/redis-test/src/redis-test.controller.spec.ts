import { Test, TestingModule } from '@nestjs/testing';
import { RedisTestController } from './redis-test.controller';
import { RedisTestService } from './redis-test.service';

describe('RedisTestController', () => {
  let redisTestController: RedisTestController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RedisTestController],
      providers: [RedisTestService],
    }).compile();

    redisTestController = app.get<RedisTestController>(RedisTestController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(redisTestController.getHello()).toBe('Hello World!');
    });
  });
});
