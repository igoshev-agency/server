import { Localization } from '../../settings/entities/localization.entity';

export class CreateServiceDto {
  title: Localization;
  desc: Localization;
  price: Localization;
  img: string;
  size: number;
  path: string;
}
