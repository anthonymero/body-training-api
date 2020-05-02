import { Module } from '@nestjs/common';
import { SetController } from './set.controller';
import { SetService } from './set.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Set } from './set.entity';
import { ExerciceService } from '../exercice/exercice.service';
import { Exercice } from '../exercice/exercice.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Set, Exercice]),
  ],
  controllers: [SetController],
  providers: [SetService, ExerciceService],
})
export class SetModule {}
