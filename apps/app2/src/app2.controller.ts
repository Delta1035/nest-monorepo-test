import { Lib1Service } from '@app/lib1';
import { Controller, Get, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { App2Service } from './app2.service';

@Controller()
export class App2Controller {
  @Inject(ConfigService)
  private configService: ConfigService;

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

  @Get('config')
  findAll() {
    return {
      ccc: this.configService.get('aaa.bbb.ccc'),
      ddd: this.configService.get('ddd'),
    };
  }
}
