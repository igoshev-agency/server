import { Controller, Get, Post, Body } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { CreateInfoDto } from './dto/create-info.dto';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post('menu')
  createMenu(@Body() dto: CreateMenuDto) {
    return this.settingsService.createMenu(dto);
  }

  @Get('menu')
  findAllMenus() {
    return this.settingsService.findAllMenus();
  }

  @Post('info')
  createInfo(@Body() dto: CreateInfoDto) {
    return this.settingsService.createInfo(dto);
  }

  @Get('info')
  findAllInfos() {
    return this.settingsService.findAllInfos();
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
