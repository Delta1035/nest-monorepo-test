import { Lib1Service } from '@app/lib1';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly lib: Lib1Service,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('aaa')
  aaa() {
    return 'aaa' + this.lib.xxx();
  }
}
