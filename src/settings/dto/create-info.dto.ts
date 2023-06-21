import { Localization } from '../entities/localization.entity';

export class CreateInfoDto {
  title: Localization;
  value: string;
  text: Localization;
}
