import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PaymentTypesEnum } from '../../utils/enums.utils';
import { PAYMENTS } from '../../utils/strings.utils';
import { User } from './user.schema';
import { Types } from 'mongoose';

@Schema({
  collection: PAYMENTS,
  timestamps: true,
})
export class Payment {
  @Prop({ required: true, enum: PaymentTypesEnum })
  type: PaymentTypesEnum;

  @Prop({ required: true, type: Types.ObjectId, ref: User.name })
  consumer: User | Types.ObjectId | undefined;

  @Prop({ required: true, type: Types.ObjectId, ref: User.name })
  merchant: User | Types.ObjectId | undefined;

  @Prop({ required: true, type: Types.ObjectId, ref: Payment.name })
  payment: Payment | Types.ObjectId | undefined;

  @Prop({ required: true, type: Date })
  date: Date;
}

type PaymentDocument = Payment & Document;
const PaymentSchema = SchemaFactory.createForClass(Payment);

export type { PaymentDocument };
export { PaymentSchema };
