import { Controller, Get, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestConfigTestService } from './nest-config-test.service';

@Controller()
export class NestConfigTestController {
  @Inject(ConfigService)
  private configService: ConfigService;
  constructor(private readonly nestConfigTestService: NestConfigTestService) {}

  @Get()
  getHello(): string {
    return this.nestConfigTestService.getHello();
  }

  @Get('config')
  getConfig() {
    return {
      aaa: this.configService.get('aaa'),
      bbb: this.configService.get('bbb'),
      ccc: this.configService.get('ccc'),
      ddd: this.configService.get('ddd'),
      db: this.configService.get('db'),
      port: this.configService.get('port'),
      application: this.configService.get('application'),
      config: this.configService.get('aaa.bbb'),
    };
  }
}
