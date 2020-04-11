import { IsString, IsInt } from 'class-validator';

export class CreateExerciceDto {
    @IsString()
    readonly name: string;

    // Todo category enum []
    @IsString()
    readonly category?: string;

    // Todo hardness enum
    @IsString()
    readonly hardness?: string;
}
