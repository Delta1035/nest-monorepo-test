import { Injectable } from '@nestjs/common';

@Injectable()
export class CacheManagerTestService {
  getHello(): string {
    return 'Hello World!';
  }
}
