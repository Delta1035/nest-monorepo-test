import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { CacheManagerTestController } from './cache-manager-test.controller';
import { CacheManagerTestService } from './cache-manager-test.service';

@Module({
  imports: [CacheModule.register()],
  controllers: [CacheManagerTestController],
  providers: [CacheManagerTestService],
})
export class CacheManagerTestModule {}
