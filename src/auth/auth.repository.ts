import { Injectable } from "@nestjs/common";
import { IAuthRepository } from "./auth.structure";

@Injectable()
export class AuthRepository implements IAuthRepository {

    constructor() { }

    async findUser(email: string): Promise<any> {
        return 'token';
    }
}