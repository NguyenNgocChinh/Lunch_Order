import { Body, Controller, Get, Post, Query, Render } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { RestaurantService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  @Render('restaurants')
  async restaurants(@Query() query) {
    const filePath = path.join(process.cwd(), '/config.json');
    const configFile = fs.readFileSync(filePath, 'utf-8').toString();
    const data = await this.restaurantService.search(
      JSON.parse(configFile),
      query?.keyword || '',
    );
    return { data, keyword: query.keyword || '' };
  }

  @Post()
  async search(@Body() { keyword }) {
    const filePath = path.join(process.cwd(), '/config.json');
    const configFile = fs.readFileSync(filePath, 'utf-8').toString();
    const data = await this.restaurantService.search(
      JSON.parse(configFile),
      keyword,
    );
    return data;
  }
}
