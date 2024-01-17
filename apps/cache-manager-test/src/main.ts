import { NestFactory } from '@nestjs/core';
import { CacheManagerTestModule } from './cache-manager-test.module';

async function bootstrap() {
  const app = await NestFactory.create(CacheManagerTestModule);
  await app.listen(3004);
}
bootstrap();
