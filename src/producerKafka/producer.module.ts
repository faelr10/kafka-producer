import { Module } from '@nestjs/common';
import { ProducerService } from './producer.service';

@Module({
  imports: [],
  providers: [ProducerService],
})
export class ProducerModule {}
