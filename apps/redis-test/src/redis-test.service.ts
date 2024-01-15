import { Injectable } from '@nestjs/common';

@Injectable()
export class RedisTestService {
  getHello(): string {
    return 'Hello World!';
  }
}
