import { LoginAuthDto } from "./dto/loginDto";

export interface IUser{
    id: number;
    email: string;
    password: string;
}

export interface IAuthService{
    login(loginDto:LoginAuthDto): Promise<string>;
}

export interface IAuthRepository{
    findUser(email: string): Promise<IUser>;
}