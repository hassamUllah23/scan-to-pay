import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review, ReviewDocument } from '../schemas/review.schema';
import { IdDto } from '../../utils/dtos.utils';
import { CreateReviewDto } from 'src/reviews/dto/create-review.dto';
import { UpdateReviewDto } from 'src/reviews/dto/update-review.dto';
import { DeleteResult, UpdateResult } from 'mongodb';

@Injectable()
export class ReviewsRepository {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<ReviewDocument>,
  ) {}

  async create(data: CreateReviewDto): Promise<Review | undefined> {
    try {
      return await this.reviewModel.create({ ...data });
    } catch (error) {
      throw Error(error.message);
    }
  }
  async getOne(filter: IdDto): Promise<Review> {
    return await this.reviewModel.findOne({ ...filter });
  }
  async getList(): Promise<Array<Review>> {
    return await this.reviewModel.find({});
  }

  async update(filter: IdDto, data: UpdateReviewDto): Promise<UpdateResult> {
    return await this.reviewModel.updateOne({ ...filter }, { ...data });
  }
  async delete(filter: IdDto): Promise<DeleteResult> {
    return await this.reviewModel.deleteOne({ ...filter });
  }
}
