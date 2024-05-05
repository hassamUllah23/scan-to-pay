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
import { CardDetail } from 'src/utils/types.utils';

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

  // @Prop({ required: false, type: Types.ObjectId, ref: User.name })
  // merchantDetail?: User | Types.ObjectId | undefined;

  @IsOptional()
  @IsString()
  fcmToken?: string; // for firebase notifications

  @IsOptional()
  @IsEthereumAddress()
  cryptoWalletAddress?: string;

  @IsOptional()
  @IsArray()
  cards: Array<CardDetail>;
}
