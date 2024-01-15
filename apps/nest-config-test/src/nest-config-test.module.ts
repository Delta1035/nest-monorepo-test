import { MyconfigModule } from '@app/myconfig';
import { Module } from '@nestjs/common';
import path from 'path';
import { BbbModule } from './bbb/bbb.module';
import { NestConfigTestController } from './nest-config-test.controller';
import { NestConfigTestService } from './nest-config-test.service';
console.log(path);

@Module({
  imports: [BbbModule, MyconfigModule],
  controllers: [NestConfigTestController],
  providers: [NestConfigTestService],
})
export class NestConfigTestModule {}
