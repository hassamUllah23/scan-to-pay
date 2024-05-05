import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { MERCHANTS } from '../../utils/strings.utils';
import { Service } from './service.schema';
import { Types } from 'mongoose';
import { Review } from './review.schema';

@Schema({
  collection: MERCHANTS,
  timestamps: true,
})
export class Merchant {
  @Prop({ required: true })
  userId: string;

  @Prop({ default: [], type: [Types.ObjectId], ref: Service.name })
  services?: Array<Service | Types.ObjectId | undefined>;

  @Prop({ default: [], type: [Types.ObjectId], ref: Review.name })
  reviews?: Array<Review | Types.ObjectId | undefined>;
}

type MerchantDocument = Merchant & Document;
const MerchantSchema = SchemaFactory.createForClass(Merchant);

export type { MerchantDocument };
export { MerchantSchema };
