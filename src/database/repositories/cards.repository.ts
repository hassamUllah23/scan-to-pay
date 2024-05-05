import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card, CardDocument } from '../schemas/card.schema';
import { IdDto } from '../../utils/dtos.utils';
import { CreateCardDto } from '../../cards/dto/create-card.dto';
import { UpdateCardDto } from '../../cards/dto/update-card.dto';
import { DeleteResult, UpdateResult } from 'mongodb';

@Injectable()
export class CardsRepository {
  constructor(@InjectModel(Card.name) private cardModel: Model<CardDocument>) {}

  async create(data: CreateCardDto): Promise<Card | undefined> {
    try {
      return await this.cardModel.create({ ...data });
    } catch (error) {
      throw Error(error.message);
    }
  }
  async getOne(filter: IdDto): Promise<Card> {
    return await this.cardModel.findOne({ ...filter });
  }
  async getList(): Promise<Array<Card>> {
    return await this.cardModel.find({});
  }

  async update(filter: IdDto, data: UpdateCardDto): Promise<UpdateResult> {
    return await this.cardModel.updateOne({ ...filter }, { ...data });
  }
  async delete(filter: IdDto): Promise<DeleteResult> {
    return await this.cardModel.deleteOne({ ...filter });
  }
}
