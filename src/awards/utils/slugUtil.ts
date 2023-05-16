import { Award } from '../entities/award.entity';

export const createSlug = (award: Award): string => {
  return `${award.title
    .toLowerCase()
    .trim()
    .split(' ')
    .join('-')
    .toString()}-${award.maxDrawDate.getTime()}`;
};
