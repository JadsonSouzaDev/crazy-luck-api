import { Award, AwardPrice } from '../entities/award.entity';
import { AwardSoldNumbers } from './create-award-response.dto';

export class FindAwardRespondeDto {
  constructor(award: Award) {
    this.slug = award.slug;
    this.title = award.title;
    this.description = award.description;
    this.shortDescription = award.shortDescription;
    this.urlImage = award.urlImage;
    this.prices = award.prices;
    // TODO: Replace solded number
    this.soldNumbers = { total: award.totalTickets, solded: 0 };
    this.maxDrawDate = award.maxDrawDate;
    this.drawDate = award.drawDate;
    this.createAt = award.createdAt;
    this.updateAt = award.updatedAt;
  }

  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  urlImage: string;
  prices: AwardPrice[];
  soldNumbers: AwardSoldNumbers;
  maxDrawDate: Date;
  drawDate: Date;
  createAt: Date;
  updateAt: Date;
}
