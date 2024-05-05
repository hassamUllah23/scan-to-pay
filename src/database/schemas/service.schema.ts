import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SERVICES } from '../../utils/strings.utils';

@Schema({
  collection: SERVICES,
  timestamps: true,
})
export class Service {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  charges: number;

  @Prop({ required: true })
  merchant: string;
}

type ServiceDocument = Service & Document;
const ServiceSchema = SchemaFactory.createForClass(Service);

export type { ServiceDocument };
export { ServiceSchema };
