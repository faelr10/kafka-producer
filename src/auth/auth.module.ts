import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { ProducerService } from 'src/producerKafka/producer.service';



@Module({
  controllers: [AuthController],
  providers: [AuthService,AuthRepository,ProducerService],
})
export class AuthModule {}