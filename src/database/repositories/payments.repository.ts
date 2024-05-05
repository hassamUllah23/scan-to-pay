import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment, PaymentDocument } from '../schemas/payment.schema';
import { IdDto } from '../../utils/dtos.utils';
import { CreatePaymentDto } from 'src/payments/dto/create-payment.dto';
import { UpdatePaymentDto } from 'src/payments/dto/update-payment.dto';
import { DeleteResult, UpdateResult } from 'mongodb';

@Injectable()
export class PaymentsRepository {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>,
  ) {}

  async create(data: CreatePaymentDto): Promise<Payment | undefined> {
    try {
      return await this.paymentModel.create({ ...data });
    } catch (error) {
      throw Error(error.message);
    }
  }
  async getOne(filter: IdDto): Promise<Payment> {
    return await this.paymentModel.findOne({ ...filter });
  }
  async getList(): Promise<Array<Payment>> {
    return await this.paymentModel.find({});
  }

  async update(filter: IdDto, data: UpdatePaymentDto): Promise<UpdateResult> {
    return await this.paymentModel.updateOne({ ...filter }, { ...data });
  }
  async delete(filter: IdDto): Promise<DeleteResult> {
    return await this.paymentModel.deleteOne({ ...filter });
  }
}
