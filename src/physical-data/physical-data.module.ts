import { Module } from '@nestjs/common';
import { PhysicalDataService } from './physical-data.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhysicalData } from './physical-data.entity';
import { User } from 'user/user.entity';
import { UserService } from 'user/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PhysicalData, User]),
  ],
  providers: [PhysicalDataService, UserService],
})
export class PhysicalDataModule {}
