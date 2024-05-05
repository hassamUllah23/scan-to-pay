import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ObjectId } from 'mongodb';
import { faker } from '@faker-js/faker';
import { RolesEnum } from '../utils/enums.utils';
// import { IdDto } from '../utils/';
import { UpdateUserDto } from './dto/update-user.dto';
import { IdDto } from 'src/utils/dtos.utils';

describe('UsersController', () => {
  let controller: UsersController;

  const mockUsersService = {
    create: jest.fn((data): Promise<any> => {
      return {
        _id: new ObjectId().toString(),
        ...data,
      };
    }),
    update: jest.fn((filter, data): Promise<any> => {
      return {
        ...filter,
        ...data,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(mockUsersService)
      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', async () => {
    const data: CreateUserDto = {
      firstName: faker.person.firstName(),
      lastName: faker.person.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      role: RolesEnum.Consumer,
    };
    expect(await controller.create({ ...data })).toStrictEqual({
      _id: expect.any(String),
      ...data,
    });
  });

  it('should update a user', async () => {
    const filter: IdDto = { _id: faker.database.mongodbObjectId() };
    const data: UpdateUserDto = {
      firstName: faker.person.firstName(),
      lastName: faker.person.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      role: RolesEnum.Consumer,
    };
    expect(await controller.update({ ...filter }, { ...data })).toStrictEqual({
      _id: expect.any(String),
      ...data,
    });
  });
});
