import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Query,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import {
  CREATE,
  DELETE,
  GET,
  LIST,
  UPDATE,
  CARDS,
} from '../utils/strings.utils';
import { IdDto } from '../utils/dtos.utils';

@Controller(CARDS)
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post(CREATE)
  async create(@Body() data: CreateCardDto) {
    try {
      return await this.cardsService.create({ ...data });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(LIST)
  async getList() {
    try {
      return await this.cardsService.getList();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(GET)
  async getOne(@Query() filter: IdDto) {
    try {
      return await this.cardsService.getOne({ ...filter });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch(UPDATE)
  async update(@Query() filter: IdDto, @Body() data: UpdateCardDto) {
    try {
      return await this.cardsService.update({ ...filter }, { ...data });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(DELETE)
  async delete(@Query() filter: IdDto) {
    try {
      return await this.cardsService.delete({ ...filter });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
