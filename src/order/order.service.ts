import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  create(createOrderDto: CreateOrderDto) {
    const createdOrder = new this.orderModel(createOrderDto);
    return createdOrder.save();
  }

  findAll() {
    return this.orderModel.find().exec();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} order`;
  // }
  //
  // update(id: number, updateOrderDto: UpdateOrderDto) {
  //   return `This action updates a #${id} order`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} order`;
  // }
}
