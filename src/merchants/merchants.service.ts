import { Inject, Injectable } from '@nestjs/common';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { UpdateMerchantDto } from './dto/update-merchant.dto';
import { MerchantsRepository } from '../database/repositories/merchants.repository';
import { Merchant } from '../database/schemas/merchant.schema';
import { IdDto } from '../utils/dtos.utils';
import { DeleteResult, UpdateResult } from 'mongodb';

@Injectable()
export class MerchantsService {
  constructor(
    @Inject(MerchantsRepository)
    private readonly merchantsRepository: MerchantsRepository,
  ) {}

  async create(data: CreateMerchantDto): Promise<Merchant> {
    try {
      return await this.merchantsRepository.create({ ...data });
    } catch (error) {
      throw Error(error);
    }
  }

  async getOne(filter: IdDto): Promise<Merchant> {
    return await this.merchantsRepository.getOne({ ...filter });
  }

  async getList(): Promise<Array<Merchant>> {
    return await this.merchantsRepository.getList();
  }

  async update(filter: IdDto, data: UpdateMerchantDto): Promise<UpdateResult> {
    return await this.merchantsRepository.update({ ...filter }, { ...data });
  }

  async delete(filter: IdDto): Promise<DeleteResult> {
    return await this.merchantsRepository.delete({ ...filter });
  }
}
