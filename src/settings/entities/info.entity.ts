import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Localization } from './localization.entity';

export type InfoDocument = HydratedDocument<Info>;

@Schema()
export class Info {
  @Prop({ type: Localization })
  title: {
    en: string;
    de: string;
    ru: string;
  };

  @Prop()
  value: number;

  @Prop({ type: Localization })
  text: {
    en: string;
    de: string;
    ru: string;
  };
}

export const InfoSchema = SchemaFactory.createForClass(Info);
