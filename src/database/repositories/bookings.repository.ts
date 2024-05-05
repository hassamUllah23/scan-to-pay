import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking, BookingDocument } from '../schemas/booking.schema';
import { IdDto } from '../../utils/dtos.utils';
import { CreateBookingDto } from 'src/bookings/dto/create-booking.dto';
import { UpdateBookingDto } from 'src/bookings/dto/update-booking.dto';
import { DeleteResult, UpdateResult } from 'mongodb';

@Injectable()
export class BookingsRepository {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<BookingDocument>,
  ) {}

  async create(data: CreateBookingDto): Promise<Booking | undefined> {
    try {
      return await this.bookingModel.create({ ...data });
    } catch (error) {
      throw Error(error.message);
    }
  }
  async getOne(filter: IdDto): Promise<Booking> {
    return await this.bookingModel.findOne({ ...filter });
  }
  async getList(): Promise<Array<Booking>> {
    return await this.bookingModel.find({});
  }

  async update(filter: IdDto, data: UpdateBookingDto): Promise<UpdateResult> {
    return await this.bookingModel.updateOne({ ...filter }, { ...data });
  }
  async delete(filter: IdDto): Promise<DeleteResult> {
    return await this.bookingModel.deleteOne({ ...filter });
  }
}
