import { IsInt } from 'class-validator';

export class CreateSetDto {
    @IsInt()
    readonly nbReps: number;

    @IsInt()
    readonly weight: number;

    @IsInt()
    readonly recovery: number;

    @IsInt()
    readonly exerciceId: number;

}
