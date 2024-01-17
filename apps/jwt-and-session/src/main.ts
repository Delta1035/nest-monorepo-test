import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { JwtAndSessionModule } from './jwt-and-session.module';

async function bootstrap() {
  const app = await NestFactory.create(JwtAndSessionModule);
  app.use(
    session({
      secret: 'yang', // 指定加密的秘钥
      resave: false, // 每次访问都更新session，不管有没有修改session的内容
      saveUninitialized: false, // true 表示不管是否设置session都会初始化一个空的session对象
    }),
  );
  await app.listen(3005);
}
bootstrap();
