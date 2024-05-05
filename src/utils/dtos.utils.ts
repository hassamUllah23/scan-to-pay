import { IsMongoId, IsNotEmpty } from 'class-validator';

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
