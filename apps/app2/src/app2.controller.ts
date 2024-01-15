import { Lib1Service } from '@app/lib1';
import { Controller, Get } from '@nestjs/common';
import { App2Service } from './app2.service';

@Controller()
export class App2Controller {
  constructor(
    private readonly app2Service: App2Service,
    private readonly lib: Lib1Service,
  ) {}

  @Get()
  getHello(): string {
    return this.app2Service.getHello();
  }

  @Get('bbb')
  bbb() {
    return 'bbb' + this.lib.xxx();
  }
}
