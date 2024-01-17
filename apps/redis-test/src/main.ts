import { NestFactory } from '@nestjs/core';
import { RedisTestModule } from './redis-test.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(RedisTestModule);
    // const configService = app.get(ConfigService);
    // const redisUrl = `redis://${configService.get(
    //   'redis.passphrase',
    // )}@${configService.get('redis.host')}:${configService.get('redis.port')}`;
    // console.log('redis url: >>>>>>>>>>>' + redisUrl);

    // const client = createClient({
    //   //这个写法链接不上去
    //   socket: {
    //     host: configService.get('redis.host'),
    //     port: configService.get('redis.port'),
    //     passphrase: configService.get('redis.passphrase'),
    //   },
    //   // url: redisUrl,
    // });
    // client.on('error', (err) => {
    //   console.log('Redis client error', err);
    // });
    // await client.connect();
    // //  创建hash表
    // await client.hSet('hash', 'field1', 'value1');
    // await client.hSet('hash', 'field2', 'value2');
    // await client.hSet('hash', 'field3', 'value3');
    // const value = await client.keys('*');
    // console.log('Redis client keys :>>>>>', value);
    // const hashValue = await client.hGetAll('hash');
    // console.log('Redis client hashValue :>>>>>', hashValue);

    // await client.disconnect();

    await app.listen(3000);
  } catch (error) {
    console.log('error :>>>>>', error);
  }
}
bootstrap();
