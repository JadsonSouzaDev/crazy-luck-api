import { AwardsRepository } from 'src/repositories/awards.repository';
import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Award } from './entities/award.entity';

@Injectable()
export class PrismaAwardsRepository implements AwardsRepository {
  constructor(private prisma: PrismaService) {}

  async create(iAward: Award): Promise<Award> {
    const { prices, ...award } = iAward;
    return this.prisma.award.create({
      data: {
        ...award,
        prices: {
          createMany: {
            data: prices,
          },
        },
      },
    });
  }
}
