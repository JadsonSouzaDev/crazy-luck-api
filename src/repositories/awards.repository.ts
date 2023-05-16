import { Award } from 'src/awards/entities/award.entity';

export abstract class AwardsRepository {
  abstract create(award: Award): Promise<Award>;
}
