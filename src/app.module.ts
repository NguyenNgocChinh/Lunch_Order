import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigController } from './Config/config.controller';
import { RestaurantController } from './Restaurants/restautrants.controller';
import { RestaurantService } from './Restaurants/restaurants.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ConfigController, RestaurantController],
  providers: [AppService, RestaurantService],
})
export class AppModule {}
