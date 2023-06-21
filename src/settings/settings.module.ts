import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Menu, MenuSchema } from './entities/menu.entity';
import { Info, InfoSchema } from './entities/info.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Menu.name, schema: MenuSchema },
      { name: Info.name, schema: InfoSchema },
    ]),
  ],
  controllers: [SettingsController],
  providers: [SettingsService],
})
export class SettingsModule {}
