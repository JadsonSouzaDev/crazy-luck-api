import { PartialType } from '@nestjs/mapped-types';
import { CreateAwardRequestDto } from './create-award-request.dto';

export class UpdateAwardRequestDto extends PartialType(CreateAwardRequestDto) {}
