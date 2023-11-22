import { Module } from '@nestjs/common';
import { RestaurantController } from './restautrants.controller';
import { RestaurantService } from './restaurants.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class RestaurantsModule {}
