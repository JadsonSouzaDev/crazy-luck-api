import { Injectable } from '@nestjs/common';
import { UpdateAwardRequestDto } from './dto/update-award-request.dto';
import { CreateAwardRequestDto } from './dto/create-award-request.dto';
import { AwardsRepository } from 'src/repositories/awards.repository';
import { Award } from './entities/award.entity';
import { createSlug } from './utils/slugUtil';
import { CreateAwardResponseDto } from './dto/create-award-response.dto';
import { FindAwardRespondeDto } from './dto/find-award-response.dto';

@Injectable()
export class AwardsService {
  constructor(private repository: AwardsRepository) {}

  async create(
    createAwardDto: CreateAwardRequestDto,
  ): Promise<CreateAwardResponseDto> {
    const award: Award = new Award(createAwardDto);
    const slug = createSlug(award);
    const awardSaved = await this.repository.create({ ...award, slug });
    return new CreateAwardResponseDto(awardSaved);
  }

  async findAll(): Promise<FindAwardRespondeDto[]> {
    const awards = await this.repository.findAll();
    return awards.map((award) => new FindAwardRespondeDto(award));
  }

  async findOne(slug: string): Promise<FindAwardRespondeDto> {
    const award = await this.repository.findBySlug(slug);
    return new FindAwardRespondeDto(award);
  }

  update(id: number, updateAwardDto: UpdateAwardRequestDto) {
    return `This action updates a #${id} award`;
  }

  remove(id: number) {
    return `This action removes a #${id} award`;
  }
}
