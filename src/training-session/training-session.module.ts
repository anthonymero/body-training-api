import { Module } from '@nestjs/common';
import { TrainingSessionService } from './training-session.service';
import { TrainingSessionController } from './training-session.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainingSession } from './training-session.entity';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TrainingSession, User]),
  ],
  providers: [TrainingSessionService, UserService],
  controllers: [TrainingSessionController],
})
export class TrainingSessionModule {}
