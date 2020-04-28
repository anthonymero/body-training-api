import { IsString, IsInt, IsDate } from 'class-validator';

export class CreatePhysicalDataDto {
    @IsDate()
    readonly date: Date;

    @IsInt()
    readonly weight: number;

    @IsInt()
    readonly userId: number;

    // TODO circumferences arms, chest ...

}
