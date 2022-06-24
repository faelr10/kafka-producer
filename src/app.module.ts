import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Constants, KafkaConfig } from './kafka.config';
import { ProducerModule } from './producerKafka/producer.module';


const kafkaImport = ClientsModule.register([
  KafkaConfig(Constants.KafkaClientToken),
]);
kafkaImport.global = true;
@Module({
  imports: [AuthModule,ProducerModule,kafkaImport],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
