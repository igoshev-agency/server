import { Localization } from '../entities/localization.entity';

export class CreateMenuDto {
  title: Localization;
  path: string;
}
