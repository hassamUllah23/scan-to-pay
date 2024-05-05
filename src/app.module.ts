import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { ConfigService } from './config/config.service';
import { ServicesModule } from './services/services.module';
import { CardsModule } from './cards/cards.module';
import { MerchantsModule } from './merchants/merchants.module';
import { ReviewsModule } from './reviews/reviews.module';
import { BookingsModule } from './bookings/bookings.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule,
    DatabaseModule,
    ServicesModule,
    CardsModule,
    MerchantsModule,
    ReviewsModule,
    BookingsModule,
    PaymentsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: ConfigService,
      useValue: new ConfigService(),
    },
  ],
})
export class AppModule {}
