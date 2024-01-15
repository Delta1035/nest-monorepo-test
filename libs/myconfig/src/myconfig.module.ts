import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import baseConfig from 'config/base-config';
import yamlConfig from 'config/yaml-config';
import { MyconfigService } from './myconfig.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // 1. 加载.env配置文件，但是有点问题
      // envFilePath: [
      //   path.join(process.cwd(), '.env'),
      //   path.join(process.cwd(), '.env.development'),
      //   path.join(process.cwd(), '.env.production'),
      // ],

      // 2. 异步逻辑加载
      load: [baseConfig, yamlConfig],
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234567',
      database: 'nest-test',
      synchronize: true,
      logging: true,
      entities: [],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugins: 'sha256_password',
      },
    }),
  ],
  providers: [MyconfigService],
  exports: [MyconfigService],
})
export class MyconfigModule {}
