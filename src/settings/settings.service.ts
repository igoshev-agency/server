import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu } from './entities/menu.entity';

@Injectable()
export class SettingsService {
  constructor(@InjectModel(Menu.name) private menuModel: Model<Menu>) {}

  createMenu(dto: CreateMenuDto) {
    const createdMenu = new this.menuModel(dto);
    return createdMenu.save();
  }

  findAll() {
    return this.menuModel.find().exec();
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
