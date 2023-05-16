import { Module } from '@nestjs/common';
import { AwardsService } from './awards.service';
import { AwardsController } from './awards.controller';
import { PrismaAwardsRepository } from './prisma-awards.repository';
import { AwardsRepository } from 'src/repositories/awards.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [AwardsController],
  providers: [
    AwardsService,
    PrismaService,
    { provide: AwardsRepository, useClass: PrismaAwardsRepository },
  ],
})
export class AwardsModule {}
