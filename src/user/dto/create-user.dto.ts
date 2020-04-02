import { IsString, IsInt } from 'class-validator';

export class CreateUserDto {
    @IsString()
    readonly firstName: string;

    @IsString()
    readonly lastName: string;

    @IsInt()
    readonly age: number;

    @IsInt()
    readonly size: number;

    @IsString()
    readonly email: string;

}
