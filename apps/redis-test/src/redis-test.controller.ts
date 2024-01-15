import { Controller, Get } from '@nestjs/common';
import { RedisTestService } from './redis-test.service';

@Controller()
export class RedisTestController {
  constructor(private readonly redisTestService: RedisTestService) {}

  @Get()
  getHello(): string {
    return this.redisTestService.getHello();
  }
}
