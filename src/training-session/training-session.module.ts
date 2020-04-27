import { Module } from '@nestjs/common';
import { TrainingSessionService } from './training-session.service';
import { TrainingSessionController } from './training-session.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainingSession } from './training-session.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TrainingSession]),
  ],
  providers: [TrainingSessionService],
  controllers: [TrainingSessionController],
})
export class TrainingSessionModule {}
