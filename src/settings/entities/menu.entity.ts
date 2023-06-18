import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MenuDocument = HydratedDocument<Menu>;

@Schema()
export class Menu {
  @Prop()
  title: string;

  @Prop()
  path: string;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
