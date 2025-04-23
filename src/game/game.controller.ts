import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { GuessDto } from './dto/guess.dto';
import { LeaderboardQueryDto } from './dto/leaderboard-query.dto';
import { GameService } from './game.service';
import { PlayerScore } from './entities/play-score.entity';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}
/*
  @Post('guess')
  @UsePipes(new ValidationPipe()) // Aplica la validación
  async submitGuess(@Body() guessDto: GuessDto): Promise<{ points: number }> {
    const points = await this.gameService.submitGuess(guessDto);
    return { points };
  }

  @Get('leaderboard')
  @UsePipes(new ValidationPipe())
  async getLeaderboard(
    @Query() queryDto: LeaderboardQueryDto,
  ): Promise<PlayerScore[]> {
    return await this.gameService.getLeaderboard(queryDto);
  }
    */
}
