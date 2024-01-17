import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtAndSessionController } from './jwt-and-session.controller';
import { JwtAndSessionService } from './jwt-and-session.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'yang',
      signOptions: {
        expiresIn: '7d',
      },
    }),
  ],
  controllers: [JwtAndSessionController],
  providers: [JwtAndSessionService],
})
export class JwtAndSessionModule {}
