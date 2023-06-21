import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu } from './entities/menu.entity';
import { CreateInfoDto } from './dto/create-info.dto';
import { Info } from './entities/info.entity';

@Injectable()
export class SettingsService {
  constructor(
    @InjectModel(Menu.name) private menuModel: Model<Menu>,
    @InjectModel(Info.name) private infoModel: Model<Info>,
  ) {}

  createMenu(dto: CreateMenuDto) {
    const createdMenu = new this.menuModel(dto);
    return createdMenu.save();
  }

  findAllMenus() {
    return this.menuModel.find().exec();
  }

  createInfo(dto: CreateInfoDto) {
    const createdInfo = new this.infoModel(dto);
    return createdInfo.save();
  }

  findAllInfos() {
    return this.infoModel.find().exec();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} setting`;
  // }
  //
  // update(id: number, updateSettingDto: UpdateSettingDto) {
  //   return `This action updates a #${id} setting`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} setting`;
  // }
}
