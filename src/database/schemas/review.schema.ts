import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { REVIEWS } from '../../utils/strings.utils';
import { Service } from './service.schema';
import { Types } from 'mongoose';
import { User } from './user.schema';

@Schema({
  collection: REVIEWS,
  timestamps: true,
})
export class Review {
  @Prop({ required: true, type: String })
  description: string;

  @Prop({ required: true, type: Number })
  rating: number;

  @Prop({ required: true, type: Types.ObjectId, ref: User.name })
  consumer: User | Types.ObjectId | undefined;

  @Prop({ required: true, type: Types.ObjectId, ref: User.name })
  merchant: User | Types.ObjectId | undefined;

  @Prop({ default: [], type: [Types.ObjectId], ref: Service.name })
  reviews?: Array<Service | Types.ObjectId | undefined>;
}

type ReviewDocument = Review & Document;
const ReviewSchema = SchemaFactory.createForClass(Review);

export type { ReviewDocument };
export { ReviewSchema };
