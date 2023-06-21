import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Localization } from '../../settings/entities/localization.entity';
import { LocalizationArray } from '../../settings/entities/localization-array.entity';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
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

  @Prop({ type: LocalizationArray })
  tags: {
    en: [string];
    de: [string];
    ru: [string];
  };

  @Prop()
  video: string;

  @Prop()
  img: string;

  @Prop()
  link: string;

  @Prop()
  path: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
