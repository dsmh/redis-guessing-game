import { IsInt, Min, IsOptional, IsString, Length } from 'class-validator';
import { Transform } from 'class-transformer';

export class LeaderboardQueryDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Transform(({ value }) => parseInt(value, 10)) //Convierte el query param a numero
  limit?: number = 10; //Valor por defecto.

  @IsOptional()
  @IsString()
  @Length(1, 50)
  username?: string;
}
