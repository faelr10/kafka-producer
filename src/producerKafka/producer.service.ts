import {
    Inject,
    Injectable,
    OnModuleDestroy,
    OnModuleInit,
  } from '@nestjs/common';
  import { ClientKafka } from '@nestjs/microservices';
  import { Message } from '@nestjs/microservices/external/kafka.interface';
  import { Constants } from 'src/kafka.config';
  
  @Injectable()
  export class ProducerService implements OnModuleInit, OnModuleDestroy {
    constructor(
      @Inject(Constants.KafkaClientToken)
      private readonly kafkaClient: ClientKafka,
    ) {}
  
    async onModuleInit() {
      this.kafkaClient.subscribeToResponseOf('login');
      await this.kafkaClient.connect();
    }
  
    async onModuleDestroy() {
      await this.kafkaClient.close();
    }
  
    sendMessage(topic: string, message: Message) {
      return this.kafkaClient.send(topic, message);
    }
  
    sendMessages(topic: string, messages: Message[]) {
      return this.kafkaClient.send(topic, messages);
    }
  }