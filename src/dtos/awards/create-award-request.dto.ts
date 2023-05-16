import {
  IsArray,
  IsDate,
  IsInt,
  IsNotEmpty,
  Length,
  Min,
  MinLength,
} from 'class-validator';
import { AwardPrice } from 'src/model/Award';

export class CreateAwardRequest {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @Length(1, 1000)
  description: string;

  @IsNotEmpty()
  @Length(1, 300)
  shorDescription: string;

  @IsArray()
  @MinLength(1)
  prices: AwardPrice[];

  @IsInt()
  @Min(1)
  totalTickets: number;

  @IsDate()
  maxDrawDate: Date
}
