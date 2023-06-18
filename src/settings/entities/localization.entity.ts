import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LocalizationDocument = HydratedDocument<Localization>;

export interface Languages {
  en: string;
  de: string;
  ru: string;
}

@Schema()
export class Localization {
  @Prop()
  en: string;

  @Prop()
  de: string;

  @Prop()
  ru: string;
}

export const LocalizationSchema = SchemaFactory.createForClass(Localization);
