import { Inject, Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from '../database/schemas/card.schema';
import { IdDto } from '../utils/dtos.utils';
import { DeleteResult, UpdateResult } from 'mongodb';
import { CardsRepository } from '../database/repositories/cards.repository';

@Injectable()
export class CardsService {
  constructor(
    @Inject(CardsRepository) private readonly cardsRepository: CardsRepository,
  ) {}

  async create(data: CreateCardDto): Promise<Card> {
    try {
      return await this.cardsRepository.create({ ...data });
    } catch (error) {
      throw Error(error);
    }
  }

  async getOne(filter: IdDto): Promise<Card> {
    return await this.cardsRepository.getOne({ ...filter });
  }

  async getList(): Promise<Array<Card>> {
    return await this.cardsRepository.getList();
  }

  async update(filter: IdDto, data: UpdateCardDto): Promise<UpdateResult> {
    return await this.cardsRepository.update({ ...filter }, { ...data });
  }

  async delete(filter: IdDto): Promise<DeleteResult> {
    return await this.cardsRepository.delete({ ...filter });
  }
}
