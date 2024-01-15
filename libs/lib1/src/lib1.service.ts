import { Injectable } from '@nestjs/common';

@Injectable()
export class Lib1Service {
  xxx() {
    return 'XXX' + 'hihihi';
  }
}
