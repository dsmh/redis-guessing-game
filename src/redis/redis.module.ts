import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';

@Module({
  providers: [RedisService],
  exports: [RedisService], // Exporta el servicio para usarlo en otros módulos
})
export class RedisModule {}
