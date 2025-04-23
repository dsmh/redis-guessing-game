import { Injectable } from '@nestjs/common';
import { RedisService } from '../redis/redis.service';
import { GuessDto } from './dto/guess.dto';
import { LeaderboardQueryDto } from './dto/leaderboard-query.dto';
import { PlayerScore } from './entities/play-score.entity';

@Injectable()
export class GameService {
  private readonly leaderboardKey = 'game:leaderboard'; //Clave base.
  private winningNumber: number;
  constructor(private redisService: RedisService) {
    this.generateWinningNumber();
  }

  private generateWinningNumber() {
    this.winningNumber = Math.floor(Math.random() * 7) + 1;
    console.log('Winning number:', this.winningNumber); //Para testing
  }
 
  async submitGuess(guessDto: GuessDto): Promise<number> {
    const { username, guess } = guessDto;
    const diff = Math.abs(guess - this.winningNumber);
    let points = 0;
 
    if (diff === 0) {
      points = 7;
    } else if (diff === 1) {
      points = 3;
    } else if (diff === 2) {
      points = 2;
    }
 
    if (points > 0) {
      const client = this.redisService.getClient();
      await client.zincrby(this.leaderboardKey, points, username);
    }
    this.generateWinningNumber(); // Genera un nuevo número después de cada intento
    return points;
  }
 
  async getLeaderboard(queryDto: LeaderboardQueryDto): Promise<PlayerScore[]> {
    const { limit, username } = queryDto;
    const client = this.redisService.getClient();
    let result: string[];
 
    if (username) {
     const rank = await ////???  client.
     const score = await ///???  
 
      if (rank !== null && score !== null) {
        //El +1 es porque zrevrank regresa indices base 0.
        return [{ username, score: parseFloat(score) }];
      } else {
        return []; // Usuario no encontrado
      }
    } 
      else {
      //Obtener los mejores.
      result = await ////??? 
    }
 
    // Convertir el resultado en un array de PlayerScore
    const leaderboard: PlayerScore[] = [];
    for (let i = 0; i < result.length; i += 2) {
      leaderboard.push({
        username: result[i],
        score: parseFloat(result[i + 1]), // Convierte el score a número
      });
    }
    return leaderboard;
  }
  async getPlayerRankAndScore(
    username: string,
  ): Promise<{ rank: number; score: number } | null> {
    const client = this.redisService.getClient();
    const rank = ////????????? 
    const score = ////////////????? 
 
    if (rank !== null && score !== null) {
      return { rank: rank + 1, score: parseFloat(score) }; // +1 porque los rangos en Redis empiezan en 0
    }
 
    return null; // El usuario no existe en el leaderboard
  }

  
}
