import { Test, TestingModule } from '@nestjs/testing';
import { JwtAndSessionController } from './jwt-and-session.controller';
import { JwtAndSessionService } from './jwt-and-session.service';

describe('JwtAndSessionController', () => {
  let jwtAndSessionController: JwtAndSessionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [JwtAndSessionController],
      providers: [JwtAndSessionService],
    }).compile();

    jwtAndSessionController = app.get<JwtAndSessionController>(JwtAndSessionController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(jwtAndSessionController.getHello()).toBe('Hello World!');
    });
  });
});
