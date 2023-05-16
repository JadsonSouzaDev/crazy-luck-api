import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { AwardsModule } from './awards/awards.module';

@Module({
  imports: [AwardsModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
