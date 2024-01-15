import { NestFactory } from '@nestjs/core';
import { NestConfigTestModule } from './nest-config-test.module';

async function bootstrap() {
  const app = await NestFactory.create(NestConfigTestModule);
  await app.listen(3003);
}
bootstrap();
