import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  @Render('config')
  async config() {
    const config = await this.configService.findConfig();
    return { config: config };
  }

  @Post()
  saveConfig(@Body() body) {
    return this.configService.saveConfig(body);
  }
}
