import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  type: string;

  @Prop()
  service: string;

  @Prop()
  desc: string;

  @Prop()
  file: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
