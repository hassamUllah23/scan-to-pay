import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UsersModule } from '../src/users/users.module';
import { DatabaseModule } from '../src/database/database.module';
import { CreateUserDto } from '../src/users/dto/create-user.dto';
import { faker } from '@faker-js/faker';
import { RolesEnum } from '../src/utils/enums.utils';

describe('UserController (e2e)', () => {
  let app: INestApplication;
  // let user:User | undefined = undefined

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsersModule, DatabaseModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/users/create (POST) should return status 500', () => {
    const data: CreateUserDto = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: RolesEnum.Consumer,
      cards: [],
    };
    return request(app.getHttpServer())
      .post('/users/create')
      .send({ ...data })
      .expect(HttpStatus.INTERNAL_SERVER_ERROR);
  });
  // it('/users/create (POST) should create uer and return status 201', () => {
  //     const data: CreateUserDto = {
  //         firstName: faker.person.firstName(), lastName: faker.person.firstName(), email: faker.internet.email(), password: faker.internet.password(), role: RolesEnum.Consumer
  //     }
  //     return request(app.getHttpServer())
  //         .post('/users/create')
  //         .send({ ...data })
  //         .expect(HttpStatus.CREATED)
  // });

  // it('/users/list (GET) should return status 200', () => {
  //     return request(app.getHttpServer())
  //         .get('/users/list')
  //         .expect(HttpStatus.OK)
  // });
  // it('/users/get (GET) should return status 400', () => {
  //     return request(app.getHttpServer())
  //         .get('/users/get')
  //         .query({})
  //         .expect(HttpStatus.BAD_REQUEST)
  // });
  // it('/users/update (PATCH) should return status 400', () => {
  //     return request(app.getHttpServer())
  //         .patch('/users/update')
  //         .query({})
  //         .send({})
  //         .expect(HttpStatus.BAD_REQUEST)
  // });
  it('/users/delete (DELETE) should return status 400', () => {
    return request(app.getHttpServer())
      .delete('/users/delete')
      .query({})
      .expect(HttpStatus.BAD_REQUEST);
  });
});
