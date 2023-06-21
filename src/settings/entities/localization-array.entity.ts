import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LocalizationArrayDocument = HydratedDocument<LocalizationArray>;

export interface LanguagesArray {
  en: string[];
  de: string[];
  ru: string[];
}

@Schema()
export class LocalizationArray {
  @Prop()
  en: [string];

  @Prop()
  de: [string];

  @Prop()
  ru: [string];
}

export const LocalizationArraySchema =
  SchemaFactory.createForClass(LocalizationArray);
