class AwardSoldNumbers {
  solded: number = 0;
  total: number = 0;
}

export class CreateAwardResponseDto {
  id: string;
  slug: string;
  title: string;
  soldNumbers: AwardSoldNumbers;
}
