import { PartialType } from '@nestjs/mapped-types';
import { CreateAwardResponseDto } from './create-award-response.dto';

export class UpdateAwardResponseDto extends PartialType(
  CreateAwardResponseDto,
) {}
