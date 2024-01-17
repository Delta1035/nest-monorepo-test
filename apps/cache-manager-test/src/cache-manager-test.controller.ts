import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Controller, Get, Inject, Query } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CacheManagerTestService } from './cache-manager-test.service';
@Controller()
export class CacheManagerTestController {
  constructor(
    private readonly cacheManagerTestService: CacheManagerTestService,
  ) {}

  @Inject(CACHE_MANAGER)
  private cacheManager: Cache;
  @Get()
  getHello(): string {
    return this.cacheManagerTestService.getHello();
  }

  // @Get('set')
  // async setCache(@Query('value') value: string) {
  //   await this.cacheManager.set('kkk', value);
  //   console.log(value);
  //   const r = await this.cacheManager.get('kkk');
  //   console.log(r);
  //   return 'done';
  // }

  // @Get('get')
  // async getCache() {
  //   return this.cacheManager.get('kkk');
  // }

  // @Get('del')
  // async delCache() {
  //   await this.cacheManager.del('kkk');
  //   return 'done';
  // }

  @Get('set')
  async set(@Query('value') value: string) {
    await this.cacheManager.set('kkk', value);
    return 'done';
  }

  @Get('get')
  async get() {
    return this.cacheManager.get('kkk');
  }

  @Get('del')
  async del() {
    await this.cacheManager.del('kkk');
    return 'done';
  }
}
