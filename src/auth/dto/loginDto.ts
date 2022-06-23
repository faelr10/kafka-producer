import { IsEmail, IsString, MinLength } from "class-validator";

export class LoginAuthDto {

    @IsEmail()
    readonly email: string;

    @IsString() @MinLength(1)
    readonly password: string;

}
