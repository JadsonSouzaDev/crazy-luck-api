import { CreateAwardResponse } from "src/dtos/awards/create-award-response.dto";

export abstract class AwardsRepository {
  abstract create(CreateAwardRequest): Promise<CreateAwardResponse>;
}
