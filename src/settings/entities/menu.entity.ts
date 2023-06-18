import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Localization } from './localization.entity';

export type MenuDocument = HydratedDocument<Menu>;

@Schema()
export class Menu {
  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Localization' } })
  title: Localization;

  @Prop()
  path: string;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
