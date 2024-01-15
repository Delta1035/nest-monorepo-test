import { Injectable } from '@nestjs/common';

@Injectable()
export class NestConfigTestService {
  getHello(): string {
    return 'Hello World!';
  }
}
