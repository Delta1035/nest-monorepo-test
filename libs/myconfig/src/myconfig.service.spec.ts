import { Test, TestingModule } from '@nestjs/testing';
import { MyconfigService } from './myconfig.service';

describe('MyconfigService', () => {
  let service: MyconfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyconfigService],
    }).compile();

    service = module.get<MyconfigService>(MyconfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
