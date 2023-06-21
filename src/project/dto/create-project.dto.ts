import { Localization } from '../../settings/entities/localization.entity';
import { LocalizationArray } from '../../settings/entities/localization-array.entity';

export class CreateProjectDto {
  title: Localization;
  desc: Localization;
  tags: LocalizationArray;
  video?: string;
  img?: string;
  link: string;
  path?: string;
}
