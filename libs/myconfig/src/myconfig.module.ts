import { Module, Provider } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createClient } from '@redis/client';
import { REDIS_CLIENT } from 'constant/provider-token';
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

const redisProvider: Provider = {
  provide: REDIS_CLIENT,
  async useFactory(configService: ConfigService) {
    const client = createClient({
      socket: {
        host: configService.get('redis.host'),
        port: configService.get('redis.port'),
        passphrase: configService.get('redis.passphrase'),
      },
    });

    await client.connect();
    return client;
  },
  // 与angular中的deps相似
  inject: [ConfigService],
};
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
  providers: [MyconfigService, redisProvider],
  exports: [MyconfigService, redisProvider],
})
export class MyconfigModule {}
