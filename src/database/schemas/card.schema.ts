import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CardTypesEnum } from '../../utils/enums.utils';
import { CARDS } from '../../utils/strings.utils';

@Schema({
  collection: CARDS,
  timestamps: true,
})
export class Card {
  @Prop({ required: true, enum: CardTypesEnum })
  type: CardTypesEnum;

  @Prop({ required: true, type: Number })
  cardNumber: number;
  @Prop({ required: true, type: String })
  cardHolderName: string;

  @Prop({ required: true, type: Number })
  cvv: number;

  @Prop({ required: true, type: Date })
  expireDate: Date;

  @Prop({ type: Boolean })
  valid?: boolean;
}

type CardDocument = Card & Document;
const CardSchema = SchemaFactory.createForClass(Card);

export type { CardDocument };
export { CardSchema };
