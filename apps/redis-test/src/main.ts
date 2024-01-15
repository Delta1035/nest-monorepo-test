import { NestFactory } from '@nestjs/core';
import { createClient } from 'redis';
import { RedisTestModule } from './redis-test.module';

async function bootstrap() {
  try {
    const client = createClient({
      socket: {
        host: '124.222.37.52',
        port: 6380,
        // port: 6379,
        // passphrase: '123456',
      },
    });
    client.on('error', (err) => {
      console.log('Redis client error', err);
    });
    await client.connect();
    const value = await client.keys('*');
    console.log('Redis client keys :>>>>>', value);
    await client.disconnect();

    const app = await NestFactory.create(RedisTestModule);
    await app.listen(3000);
  } catch (error) {
    console.log('error :>>>>>', error);
  }
}
bootstrap();
