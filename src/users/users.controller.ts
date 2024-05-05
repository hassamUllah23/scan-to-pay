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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  CREATE,
  DELETE,
  GET,
  LIST,
  UPDATE,
  USERS,
} from '../utils/strings.utils';
import { IdDto } from '../utils/dtos.utils';

@Controller(USERS)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post(CREATE)
  async create(@Body() data: CreateUserDto) {
    try {
      return await this.usersService.create({ ...data });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(LIST)
  async getList() {
    try {
      return await this.usersService.getList();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(GET)
  async getOne(@Query() filter: IdDto) {
    try {
      return await this.usersService.getOne({ ...filter });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch(UPDATE)
  async update(@Query() filter: IdDto, @Body() data: UpdateUserDto) {
    try {
      return await this.usersService.update({ ...filter }, { ...data });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(DELETE)
  async delete(@Query() filter: IdDto) {
    try {
      return await this.usersService.delete({ ...filter });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
