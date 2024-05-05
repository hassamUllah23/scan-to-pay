import { IsArray, IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';
import { Service } from '../../database/schemas/service.schema';
import { Review } from '../../database/schemas/review.schema';

export class CreateMerchantDto {
  @IsNotEmpty()
  @IsMongoId()
  user: string;

  @IsOptional()
  @IsArray()
  services?: Array<Service>;

  @IsOptional()
  reviews?: Array<Review>;
}
