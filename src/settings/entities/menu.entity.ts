import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Localization } from './localization.entity';

export type MenuDocument = HydratedDocument<Menu>;

@Schema()
export class Menu {
  @Prop({ type: Localization })
  title: {
    en: string;
    de: string;
    ru: string;
  };

  @Prop()
  path: string;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
