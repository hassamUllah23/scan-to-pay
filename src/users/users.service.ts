import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from '../database/repositories/users.repository';
import { User } from '../database/schemas/user.schema';
import { IdDto } from '../utils/dtos.utils';
import { DeleteResult, UpdateResult } from 'mongodb';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UsersRepository) private readonly usersRepository: UsersRepository,
  ) {}

  async create(data: CreateUserDto): Promise<User> {
    try {
      return await this.usersRepository.create({ ...data });
    } catch (error) {
      throw Error(error);
    }
  }

  async getOne(filter: IdDto): Promise<User> {
    return await this.usersRepository.getOne({ ...filter });
  }

  async getList(): Promise<Array<User>> {
    return await this.usersRepository.getList();
  }

  async update(filter: IdDto, data: UpdateUserDto): Promise<UpdateResult> {
    return await this.usersRepository.update({ ...filter }, { ...data });
  }

  async delete(filter: IdDto): Promise<DeleteResult> {
    return await this.usersRepository.delete({ ...filter });
  }
}
