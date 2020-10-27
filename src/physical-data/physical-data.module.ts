import { Module } from '@nestjs/common';
import { PhysicalDataService } from './physical-data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhysicalData } from './physical-data.entity';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { PhysicalDataController } from './physical-data.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([PhysicalData, User]),
  ],
  providers: [PhysicalDataService, UserService],
  controllers: [PhysicalDataController],
})
export class PhysicalDataModule {}
