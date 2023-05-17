import { IsInt, IsNumber, Min } from 'class-validator';
import { CreateAwardRequestDto } from '../dto/create-award-request.dto';

export class AwardPrice {
  id: string;

  @IsInt()
  @Min(1)
  quantity: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  unitPrice: number;
}

export class Award {
  constructor(iAward: CreateAwardRequestDto) {
    this.title = iAward.title;
    this.description = iAward.description;
    this.shortDescription = iAward.shortDescription;
    this.prices = iAward.prices;
    this.totalTickets = iAward.totalTickets;
    this.maxDrawDate = new Date(iAward.maxDrawDate);
    this.urlImage = null;
    this.drawDate = null;
    this.active = true;
  }

  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  prices?: AwardPrice[];
  totalTickets: number;
  maxDrawDate: Date;
  urlImage?: string;
  drawDate?: Date;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
