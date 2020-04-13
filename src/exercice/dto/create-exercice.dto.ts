import { IsString, IsInt } from 'class-validator';
import { ExerciceCategory } from '../models/exercice-category.enum';
import { ExerciceHardness } from '../models/exercice-hardness.enum';

export class CreateExerciceDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly category?: ExerciceCategory;

    @IsString()
    readonly hardness?: ExerciceHardness;
}
