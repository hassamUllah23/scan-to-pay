import { Inject, Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ServicesRepository } from '../database/repositories/services.repository';
import { Service } from 'src/database/schemas/service.schema';
import { IdDto } from 'src/utils/dtos.utils';
import { DeleteResult, UpdateResult } from 'mongodb';

@Injectable()
export class ServicesService {
  constructor(
    @Inject(ServicesRepository)
    private readonly servicesRepository: ServicesRepository,
  ) {}

  async create(data: CreateServiceDto): Promise<Service> {
    try {
      return await this.servicesRepository.create({ ...data });
    } catch (error) {
      throw Error(error);
    }
  }

  async getOne(filter: IdDto): Promise<Service> {
    return await this.servicesRepository.getOne({ ...filter });
  }

  async getList(): Promise<Array<Service>> {
    return await this.servicesRepository.getList();
  }

  async update(filter: IdDto, data: UpdateServiceDto): Promise<UpdateResult> {
    return await this.servicesRepository.update({ ...filter }, { ...data });
  }

  async delete(filter: IdDto): Promise<DeleteResult> {
    return await this.servicesRepository.delete({ ...filter });
  }
}
