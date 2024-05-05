import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service, ServiceDocument } from '../schemas/service.schema';
import { IdDto } from '../../utils/dtos.utils';
import { CreateServiceDto } from '../../services/dto/create-service.dto';
import { UpdateServiceDto } from '../../services/dto/update-service.dto';
import { DeleteResult, UpdateResult } from 'mongodb';

@Injectable()
export class ServicesRepository {
  constructor(
    @InjectModel(Service.name) private serviceModel: Model<ServiceDocument>,
  ) {}

  async create(data: CreateServiceDto): Promise<Service | undefined> {
    try {
      return await this.serviceModel.create({ ...data });
    } catch (error) {
      throw Error(error.message);
    }
  }
  async getOne(filter: IdDto): Promise<Service> {
    return await this.serviceModel.findOne({ ...filter });
  }
  async getList(): Promise<Array<Service>> {
    return await this.serviceModel.find({});
  }

  async update(filter: IdDto, data: UpdateServiceDto): Promise<UpdateResult> {
    return await this.serviceModel.updateOne({ ...filter }, { ...data });
  }
  async delete(filter: IdDto): Promise<DeleteResult> {
    return await this.serviceModel.deleteOne({ ...filter });
  }
}
