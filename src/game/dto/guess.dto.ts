import { IsInt, Min, Max, IsNotEmpty, IsString, Length } from 'class-validator';

export class GuessDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 50) // Limita el largo del username
  username: string;

  @IsInt()
  @Min(1)
  @Max(7)
  guess: number;
}
