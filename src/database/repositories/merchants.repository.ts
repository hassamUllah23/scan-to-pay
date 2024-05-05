import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Merchant, MerchantDocument } from '../schemas/merchant.schema';
import { IdDto } from '../../utils/dtos.utils';
import { CreateMerchantDto } from '../../merchants/dto/create-merchant.dto';
import { UpdateMerchantDto } from '../../merchants/dto/update-merchant.dto';
import { DeleteResult, UpdateResult } from 'mongodb';

@Injectable()
export class MerchantsRepository {
  constructor(
    @InjectModel(Merchant.name) private merchantModel: Model<MerchantDocument>,
  ) {}

  async create(data: CreateMerchantDto): Promise<Merchant | undefined> {
    try {
      return await this.merchantModel.create({ ...data });
    } catch (error) {
      throw Error(error.message);
    }
  }
  async getOne(filter: IdDto): Promise<Merchant> {
    return await this.merchantModel.findOne({ ...filter });
  }
  async getList(): Promise<Array<Merchant>> {
    return await this.merchantModel.find({});
  }

  async update(filter: IdDto, data: UpdateMerchantDto): Promise<UpdateResult> {
    return await this.merchantModel.updateOne({ ...filter }, { ...data });
  }
  async delete(filter: IdDto): Promise<DeleteResult> {
    return await this.merchantModel.deleteOne({ ...filter });
  }
}
