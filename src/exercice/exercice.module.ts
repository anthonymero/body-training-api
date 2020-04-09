import { Module } from '@nestjs/common';
import { ExerciceController } from './exercice.controller';
import { ExerciceService } from './exercice.service';

@Module({
  controllers: [ExerciceController],
  providers: [ExerciceService]
})
export class ExerciceModule {}
