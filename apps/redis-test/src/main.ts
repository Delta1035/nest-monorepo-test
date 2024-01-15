import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { createClient } from 'redis';
import { RedisTestModule } from './redis-test.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(RedisTestModule);
    const configService = app.get(ConfigService);
    const redisUrl = `redis://${configService.get(
      'redis.passphrase',
    )}@${configService.get('redis.host')}:${configService.get('redis.port')}`;
    console.log('redis url: >>>>>>>>>>>' + redisUrl);

    const client = createClient({
      //这个写法链接不上去
      socket: {
        host: configService.get('redis.host'),
        port: configService.get('redis.port'),
        passphrase: configService.get('redis.passphrase'),
      },
      // url: redisUrl,
    });
    client.on('error', (err) => {
      console.log('Redis client error', err);
    });
    await client.connect();
    const value = await client.keys('*');
    console.log('Redis client keys :>>>>>', value);
    await client.disconnect();

    await app.listen(3000);
  } catch (error) {
    console.log('error :>>>>>', error);
  }
}
bootstrap();
