import { Injectable } from '@nestjs/common';
import { ProducerService } from 'src/producerKafka/producer.service';
import { AuthRepository } from './auth.repository';
import { IAuthService } from './auth.structure';
import { LoginAuthDto } from './dto/loginDto';

@Injectable()
export class AuthService implements IAuthService {

    constructor(
        private readonly authRepository: AuthRepository,
        private readonly producer: ProducerService
    ) { }

    async login(loginDto: LoginAuthDto): Promise<string> {

        //usuario fez login no sistema

        this.producer.sendMessage('logger', {
            key: 'id',
            value: `${loginDto.email}:login`
        }).subscribe(() => {
            console.log('Message sent');
        })

        return 'login';

    }

    async logout(email: string): Promise<string> {

        //usuario fez logout no sistema


        const value = `${email}:logout`;
        this.producer.sendMessage('logger', {
            key: 'id',
            value
        }).subscribe()

        return 'logout';

    }

}
