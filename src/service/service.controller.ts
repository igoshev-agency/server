import { Controller, Get, Post, Body } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  create(@Body() dto: CreateServiceDto) {
    return this.serviceService.create(dto);
  }

  @Get()
  findAll() {
    return this.serviceService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.serviceService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
  //   return this.serviceService.update(+id, updateServiceDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.serviceService.remove(+id);
  // }
}
