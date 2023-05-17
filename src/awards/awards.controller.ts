import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AwardsService } from './awards.service';
import { UpdateAwardRequestDto } from './dto/update-award-request.dto';
import { CreateAwardRequestDto } from './dto/create-award-request.dto';

@Controller('awards')
export class AwardsController {
  constructor(private readonly awardsService: AwardsService) {}

  @Post()
  async create(@Body() createAwardDto: CreateAwardRequestDto) {
    return this.awardsService.create(createAwardDto);
  }

  @Get()
  findAll() {
    return this.awardsService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.awardsService.findOne(slug);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAwardDto: UpdateAwardRequestDto,
  ) {
    return this.awardsService.update(+id, updateAwardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.awardsService.remove(+id);
  }
}
