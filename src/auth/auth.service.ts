import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { IAuthService } from './auth.structure';
import { LoginAuthDto } from './dto/loginDto';

@Injectable()
export class AuthService implements IAuthService {

    constructor(private readonly authRepository:AuthRepository) { }

    async login(loginDto:LoginAuthDto): Promise<string> {
        return 'token';
    }

}
