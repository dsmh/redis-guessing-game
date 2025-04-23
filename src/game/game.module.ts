import { Module } from '@nestjs/common';
import { RedisModule } from 'src/redis/redis.module';
import { GameController } from './game.controller';
import { GameService } from './game.service';

@Module({
  imports: [RedisModule], // Importante: Importa RedisModule aquí
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
