import { Test, TestingModule } from '@nestjs/testing';
import { PhysicalDataService } from './physical-data.service';

describe('PhysicalDataService', () => {
  let service: PhysicalDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhysicalDataService],
    }).compile();

    service = module.get<PhysicalDataService>(PhysicalDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
