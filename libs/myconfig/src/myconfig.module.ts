import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import baseConfig from '../factory/base-config';
import yamlConfig from '../factory/yaml-config';
import { MyconfigService } from './myconfig.service';
const ConfigModuleForRoot = ConfigModule.forRoot({
  isGlobal: true,
  // 1. 加载.env配置文件，但是有点问题
  // envFilePath: [
  //   path.join(process.cwd(), '.env'),
  //   path.join(process.cwd(), '.env.development'),
  //   path.join(process.cwd(), '.env.production'),
  // ],

  // 2. 异步逻辑加载
  load: [baseConfig, yamlConfig],
});
@Module({
  imports: [
    ConfigModuleForRoot,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModuleForRoot],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const mysql = configService.get('mysql');
        console.log('mysql :>>>>>>>', mysql);
        return {
          type: 'mysql',
          host: configService.get('mysql.host'),
          port: configService.get('mysql.port'),
          username: configService.get('mysql.username'),
          password: configService.get('mysql.password'),
          database: configService.get('mysql.database'),
          synchronize: true,
          logging: true,
          entities: [],
          poolSize: 10,
          connectorPackage: 'mysql2',
          extra: {
            authPlugins: 'sha256_password',
          },
        };
      },
    }),
  ],
  providers: [MyconfigService],
  exports: [MyconfigService],
})
export class MyconfigModule {}
