import { IsMongoId, IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';
// import { ObjectId } from "mongodb";

class IdDto {
  @IsNotEmpty()
  @IsMongoId()
  _id: string;
}

class ListDto {
  page: number;
  skip: number;
}
export { IdDto, ListDto };
