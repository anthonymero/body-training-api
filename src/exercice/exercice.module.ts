import { Module } from '@nestjs/common';
import { ExerciceController } from './exercice.controller';
import { ExerciceService } from './exercice.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercice } from './exercice.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Exercice]),
  ],
  controllers: [ExerciceController],
  providers: [ExerciceService],
})
export class ExerciceModule { }
