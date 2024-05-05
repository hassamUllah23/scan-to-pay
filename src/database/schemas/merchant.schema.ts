import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MERCHANTS } from '../../utils/strings.utils';
import { Service } from './service.schema';
import { Types } from 'mongoose';
import { Review } from './review.schema';
import { User } from './user.schema';

@Schema({
  collection: MERCHANTS,
  timestamps: true,
})
export class Merchant {
  @Prop({ type: [Types.ObjectId], ref: User.name })
  user: User | Types.ObjectId | undefined;

  @Prop({ default: [], type: [{ type: Types.ObjectId, ref: Service.name }] })
  services?: Array<Service | Types.ObjectId | undefined>;

  @Prop({ default: [], type: [{ type: Types.ObjectId, ref: Review.name }] })
  reviews?: Array<Review | Types.ObjectId | undefined>;
}

type MerchantDocument = Merchant & Document;
const MerchantSchema = SchemaFactory.createForClass(Merchant);

export type { MerchantDocument };
export { MerchantSchema };
