import { Controller, Get, Render } from '@nestjs/common';
import { IndexService } from './index.service';
import { ConfigService } from '../config/config.service';

@Controller('/')
export class IndexController {
  constructor(
    private readonly indexService: IndexService,
    private readonly configService: ConfigService,
  ) {}

  /**
   * Resolves the index
   * @returns data
   */
  @Render('index')
  @Get()
  async index() {
    let config = await this.configService.findConfig();

    try {
      config = JSON.parse(JSON.stringify(config));
    } catch (e) {
      // nothing to do
    }

    const data = await this.indexService.getIndex(config);
    return { data, config };
  }
}
