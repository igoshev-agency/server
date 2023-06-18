import { Controller, Get, Post, Body } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateMenuDto } from './dto/create-menu.dto';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post('menu')
  create(@Body() dto: CreateMenuDto) {
    return this.settingsService.createMenu(dto);
  }

  @Get('menu')
  findAll() {
    return this.settingsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.settingsService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSettingDto: UpdateSettingDto) {
  //   return this.settingsService.update(+id, updateSettingDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.settingsService.remove(+id);
  // }
}
