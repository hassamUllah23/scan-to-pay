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
import { MerchantsService } from './merchants.service';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { UpdateMerchantDto } from './dto/update-merchant.dto';
import {
  CREATE,
  DELETE,
  GET,
  LIST,
  MERCHANTS,
  UPDATE,
  USERS,
} from '../utils/strings.utils';
import { IdDto } from '../utils/dtos.utils';

@Controller(MERCHANTS)
export class MerchantsController {
  constructor(private readonly merchantsService: MerchantsService) {}

  @Post(CREATE)
  async create(@Body() data: CreateMerchantDto) {
    try {
      return await this.merchantsService.create({ ...data });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(LIST)
  async getList() {
    try {
      return await this.merchantsService.getList();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(GET)
  async getOne(@Query() filter: IdDto) {
    try {
      return await this.merchantsService.getOne({ ...filter });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch(UPDATE)
  async update(@Query() filter: IdDto, @Body() data: UpdateMerchantDto) {
    try {
      return await this.merchantsService.update({ ...filter }, { ...data });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(DELETE)
  async delete(@Query() filter: IdDto) {
    try {
      return await this.merchantsService.delete({ ...filter });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
