import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from './entities/service.entity';
import { CreateServiceDto } from './dto/create-service.dto';

@Injectable()
export class ServiceService {
  constructor(
    @InjectModel(Service.name) private serviceModel: Model<Service>,
  ) {}

  create(dto: CreateServiceDto) {
    const createdService = new this.serviceModel(dto);
    return createdService.save();
  }

  findAll() {
    return this.serviceModel.find().exec();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} service`;
  // }
  //
  // update(id: number, updateServiceDto: UpdateServiceDto) {
  //   return `This action updates a #${id} service`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} service`;
  // }
}
