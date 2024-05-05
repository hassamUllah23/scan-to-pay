import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RolesEnum } from '../../utils/enums.utils';
import { Types } from 'mongoose';
import { Card } from './card.schema';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, enum: RolesEnum })
  role: RolesEnum;

  @Prop({ required: false, type: Types.ObjectId, ref: User.name })
  merchantDetail?: User | Types.ObjectId | undefined;

  @Prop({})
  fcmToken: string; // for firebase notifications

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: false, unique: true, sparse: true }) // sparse:true will ensure that the unique constraint only applies to documents where cryptoWalletAddress exists
  cryptoWalletAddress: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: Card.name }], default: [] })
  cards: Array<Card | Types.ObjectId>;
}

type UserDocument = User & Document;
const UserSchema = SchemaFactory.createForClass(User);

export type { UserDocument };
export { UserSchema };
