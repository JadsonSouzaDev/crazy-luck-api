import { Injectable } from '@nestjs/common';
import { UpdateAwardRequestDto } from './dto/update-award-request.dto';
import { CreateAwardRequestDto } from './dto/create-award-request.dto';
import { AwardsRepository } from 'src/repositories/awards.repository';
import { Award } from './entities/award.entity';
import { createSlug } from './utils/slugUtil';

@Injectable()
export class AwardsService {
  constructor(private repository: AwardsRepository) {}

  create(createAwardDto: CreateAwardRequestDto) {
    const award: Award = new Award(createAwardDto);
    const slug = createSlug(award);
    return this.repository.create({ ...award, slug });
  }

  findAll() {
    return `This action returns all awards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} award`;
  }

  update(id: number, updateAwardDto: UpdateAwardRequestDto) {
    return `This action updates a #${id} award`;
  }

  remove(id: number) {
    return `This action removes a #${id} award`;
  }
}
