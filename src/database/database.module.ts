import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { User, UserSchema } from './schemas/user.schema';
import { UsersService } from '../users/users.service';
import { UsersRepository } from './repositories/users.repository';
import { CardsRepository } from './repositories/cards.repository';
import { Card, CardSchema } from './schemas/card.schema';
import { CardsService } from '../cards/cards.service';
import { Merchant, MerchantSchema } from './schemas/merchant.schema';
import { Review, ReviewSchema } from './schemas/review.schema';
import { Service, ServiceSchema } from './schemas/service.schema';
import { Booking, BookingSchema } from './schemas/booking.schema';
import { MerchantsService } from 'src/merchants/merchants.service';
import { ServicesService } from 'src/services/services.service';
import { ReviewsService } from 'src/reviews/reviews.service';
import { PaymentsService } from 'src/payments/payments.service';
import { BookingsService } from 'src/bookings/bookings.service';
import { Payment, PaymentSchema } from './schemas/payment.schema';
import { MerchantsRepository } from './repositories/merchants.repository';
import { ServicesRepository } from './repositories/services.repository';
import { PaymentsRepository } from './repositories/payments.repository';
import { ReviewsRepository } from './repositories/reviews.repository';
import { BookingsRepository } from './repositories/bookings.repository';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.getRootConfig().database.url,
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }]),
    MongooseModule.forFeature([
      { name: Merchant.name, schema: MerchantSchema },
    ]),
    MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }]),
    MongooseModule.forFeature([{ name: Service.name, schema: ServiceSchema }]),
    MongooseModule.forFeature([{ name: Booking.name, schema: BookingSchema }]),
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
  ],
  providers: [
    UsersService,
    CardsService,
    MerchantsService,
    ReviewsService,
    PaymentsService,
    BookingsService,
    ServicesService,
    UsersRepository,
    CardsRepository,
    MerchantsRepository,
    ServicesRepository,
    PaymentsRepository,
    ReviewsRepository,
    BookingsRepository,
    ConfigService,
  ],
  exports: [
    UsersRepository,
    CardsRepository,
    MerchantsRepository,
    ServicesRepository,
    PaymentsRepository,
    ReviewsRepository,
    BookingsRepository,
    ConfigService,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class DatabaseModule {}
