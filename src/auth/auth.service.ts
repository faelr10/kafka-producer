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

        this.producer.sendMessage('login', {
            key: Math.random() + '',
            value: loginDto.email,
        }).subscribe((reply) => {
            console.log('Conteúdo do reply:', reply);
        }
        );

        return 'token';
    }

}
