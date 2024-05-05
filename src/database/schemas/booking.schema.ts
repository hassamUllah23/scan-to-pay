import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BookingStatusEnum } from '../../utils/enums.utils';
import { BOOKINGS } from '../../utils/strings.utils';
import { User } from './user.schema';
import { Types } from 'mongoose';
import { Payment } from './payment.schema';
import { Service } from './service.schema';

@Schema({
  collection: BOOKINGS,
  timestamps: true,
})
export class Booking {
  @Prop({ default: BookingStatusEnum.Pending, enum: BookingStatusEnum })
  status: BookingStatusEnum;

  @Prop({ required: true, type: Date })
  date: Date;

  @Prop({ default: undefined, type: Types.ObjectId, ref: Payment.name })
  payment: Payment | Types.ObjectId | undefined;

  @Prop({ required: true, type: Types.ObjectId, ref: User.name })
  consumer: User | Types.ObjectId | undefined;

  @Prop({ required: true, type: Types.ObjectId, ref: User.name })
  merchant: User | Types.ObjectId | undefined;

  @Prop({ required: true, type: [{ type: Types.ObjectId, ref: User.name }] })
  services: Array<Service | Types.ObjectId>;
}

type BookingDocument = Booking & Document;
const BookingSchema = SchemaFactory.createForClass(Booking);

export type { BookingDocument };
export { BookingSchema };
