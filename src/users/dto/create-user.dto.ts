import {
  IsArray,
  IsEmail,
  IsEnum,
  IsEthereumAddress,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { RolesEnum } from '../../utils/enums.utils';
import { Card } from '../../database/schemas/card.schema';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEnum(RolesEnum)
  role: RolesEnum;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsEthereumAddress()
  cryptoWalletAddress?: string;

  @IsOptional()
  @IsArray()
  cards: Array<Card>;
}
