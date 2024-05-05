import {
  IsCreditCard,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { CardTypesEnum } from '../../utils/enums.utils';

export class CreateCardDto {
  @IsNotEmpty()
  @IsEnum(CardTypesEnum)
  type: CardTypesEnum;

  @IsNotEmpty()
  @IsNumber()
  cardNumber: number;

  @IsNotEmpty()
  @IsString()
  cardHolderName: string;

  @IsNotEmpty()
  @IsNumber()
  cvv: number;

  @IsNotEmpty()
  @IsDateString()
  expireDate: Date;
}
