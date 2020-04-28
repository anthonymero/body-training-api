import { Test, TestingModule } from '@nestjs/testing';
import { PhysicalDataController } from './physical-data.controller';

describe('PhysicalData Controller', () => {
  let controller: PhysicalDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhysicalDataController],
    }).compile();

    controller = module.get<PhysicalDataController>(PhysicalDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
