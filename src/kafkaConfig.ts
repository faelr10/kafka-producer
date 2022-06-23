import {
    ClientProviderOptions,
    MicroserviceOptions,
    Transport,
  } from '@nestjs/microservices';
  
  export const KafkaConfig = (
    name?: string,
  ): MicroserviceOptions & ClientProviderOptions => {
    return {
      ...(name && { name }),
      transport: Transport.KAFKA,
      options: {
        retryAttempts: 10,
        client: {
          brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
        },
      },
    };
  };
  
  export enum Constants {
    KafkaClientToken = 'KAFKA_CLIENT',
  }
  