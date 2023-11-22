import { Body, Controller, Get, Post, Query, Render } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { RestaurantService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantController {
  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  @Render('restaurants')
  async restaurants(@Query() query) {
    const config = await this.configService.findConfig();
    const data = await this.restaurantService.search(
      config,
      query?.keyword || '',
    );
    return { data, keyword: query.keyword || '' };
  }

  @Post()
  async search(@Body() { keyword }) {
    const config = await this.configService.findConfig();
    const data = await this.restaurantService.search(config, keyword);
    return data;
  }
}
