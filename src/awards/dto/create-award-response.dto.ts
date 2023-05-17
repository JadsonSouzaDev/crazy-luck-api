import { Award } from '../entities/award.entity';

export class AwardSoldNumbers {
  solded: number = 0;
  total: number = 0;
}

export class CreateAwardResponseDto {
  constructor(award: Award) {
    this.slug = award.slug;
    this.title = award.title;
    this.soldNumbers = { solded: 0, total: award.totalTickets };
    this.createdAt = award.createdAt;
    this.updateAt = award.updatedAt;
  }

  slug: string;
  title: string;
  soldNumbers: AwardSoldNumbers;
  createdAt: Date;
  updateAt: Date;
}
