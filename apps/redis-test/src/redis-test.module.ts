import { Module } from '@nestjs/common';
import { RedisTestController } from './redis-test.controller';
import { RedisTestService } from './redis-test.service';

@Module({
  imports: [],
  controllers: [RedisTestController],
  providers: [RedisTestService],
})
export class RedisTestModule {}
