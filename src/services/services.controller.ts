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
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import {
  CREATE,
  DELETE,
  GET,
  LIST,
  MERCHANTS,
  SERVICES,
  UPDATE,
  USERS,
} from '../utils/strings.utils';
import { IdDto } from '../utils/dtos.utils';

@Controller(SERVICES)
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post(CREATE)
  async create(@Body() data: CreateServiceDto) {
    try {
      return await this.servicesService.create({ ...data });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(LIST)
  async getList() {
    try {
      return await this.servicesService.getList();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(GET)
  async getOne(@Query() filter: IdDto) {
    try {
      return await this.servicesService.getOne({ ...filter });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch(UPDATE)
  async update(@Query() filter: IdDto, @Body() data: UpdateServiceDto) {
    try {
      return await this.servicesService.update({ ...filter }, { ...data });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(DELETE)
  async delete(@Query() filter: IdDto) {
    try {
      return await this.servicesService.delete({ ...filter });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
