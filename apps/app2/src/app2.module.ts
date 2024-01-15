import { Lib1Module } from '@app/lib1';
import { MyconfigModule } from '@app/myconfig';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { App2Controller } from './app2.controller';
import { App2Service } from './app2.service';

@Module({
  imports: [
    Lib1Module,
    MyconfigModule,
    ConfigModule.forFeature(() => {
      return {
        ddd: '局部配置ddd',
      };
    }),
  ],
  controllers: [App2Controller],
  providers: [App2Service],
})
export class App2Module {}
