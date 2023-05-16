import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsInt,
  IsNotEmpty,
  Length,
  Min,
  ValidateNested,
} from 'class-validator';
import { AwardPrice } from '../entities/award.entity';
import { Type } from 'class-transformer';

export class CreateAwardRequestDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @Length(1, 1000)
  description: string;

  @IsNotEmpty()
  @Length(1, 300)
  shortDescription: string;

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => AwardPrice)
  prices: AwardPrice[];

  @IsInt()
  @Min(1)
  totalTickets: number;

  @IsDateString()
  maxDrawDate: string;
}
