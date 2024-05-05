import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { IdDto } from '../../utils/dtos.utils';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { DeleteResult, UpdateResult } from 'mongodb';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(data: CreateUserDto): Promise<User | undefined> {
    try {
      return await this.userModel.create({ ...data });
    } catch (error) {
      throw Error(
        error.message.includes('E11000') ? 'Email already in use' : error,
      );
    }
  }
  async getOne(filter: IdDto): Promise<User> {
    return await this.userModel.findOne({ ...filter });
  }
  async getList(): Promise<Array<User>> {
    return await this.userModel.find({});
  }

  async update(filter: IdDto, data: UpdateUserDto): Promise<UpdateResult> {
    return await this.userModel.updateOne({ ...filter }, { ...data });
  }
  async delete(filter: IdDto): Promise<DeleteResult> {
    return await this.userModel.deleteOne({ ...filter });
  }
}
