import { IsString, IsInt, IsDate } from 'class-validator';
import { TrainingSessionType } from '../models/training-session-type.enum';

export class CreateTrainingSessionDto {
    @IsDate()
    readonly date: Date;

    @IsInt()
    readonly duration: number;

    @IsString()
    type: TrainingSessionType;

    @IsInt()
    readonly userId: number;

}
