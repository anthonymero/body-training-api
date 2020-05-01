import { IsString, IsInt, IsEmail } from 'class-validator';

export class CreateUserDto {
    @IsString()
    readonly firstName: string;

    @IsString()
    readonly lastName: string;

    @IsInt()
    readonly age: number;

    @IsInt()
    readonly size: number;

    @IsEmail()
    readonly email: string;

}
