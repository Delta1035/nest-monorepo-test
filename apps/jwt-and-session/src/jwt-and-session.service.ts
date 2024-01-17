import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtAndSessionService {
  getHello(): string {
    return 'Hello World!!';
  }
}
