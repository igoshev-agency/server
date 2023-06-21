import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Localization } from '../../settings/entities/localization.entity';

export type ServiceDocument = HydratedDocument<Service>;

@Schema()
export class Service {
  @Prop({ type: Localization })
  title: {
    en: string;
    de: string;
    ru: string;
  };

  @Prop({ type: Localization })
  desc: {
    en: string;
    de: string;
    ru: string;
  };

  @Prop({ type: Localization })
  price: {
    en: string;
    de: string;
    ru: string;
  };

  @Prop()
  img: string;

  @Prop()
  size: number;

  @Prop()
  path: string;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
