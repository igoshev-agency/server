import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}

  create(dto: CreateProjectDto) {
    const createdProject = new this.projectModel(dto);
    return createdProject.save();
  }

  findAll() {
    return this.projectModel.find().exec();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} project`;
  // }
  //
  // update(id: number, updateProjectDto: UpdateProjectDto) {
  //   return `This action updates a #${id} project`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} project`;
  // }
}
