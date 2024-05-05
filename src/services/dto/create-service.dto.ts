import { Prop } from '@nestjs/mongoose';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { User } from '../../database/schemas/user.schema';
import { Types } from 'mongoose';

export class CreateServiceDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  charges: number;

  @IsNotEmpty()
  @IsMongoId()
  merchant: User | Types.ObjectId | undefined;
}
