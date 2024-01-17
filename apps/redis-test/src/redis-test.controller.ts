import { Controller, Get, Inject, Param } from '@nestjs/common';
import { REDIS_CLIENT } from 'constant/provider-token';
import { RedisClientType } from 'redis';
import { RedisTestService } from './redis-test.service';

@Controller()
export class RedisTestController {
  @Inject(REDIS_CLIENT)
  redisClient: RedisClientType;
  constructor(private readonly redisTestService: RedisTestService) {}

  @Get()
  getHello(): string {
    return this.redisTestService.getHello();
  }

  @Get('redis/:key')
  async getRedisByKey(@Param() params: any) {
    return await this.redisClient.hGetAll(params.key);
  }
}
