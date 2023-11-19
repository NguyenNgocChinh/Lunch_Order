import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import * as fs from 'fs';
import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async findById() {
    const filePath = path.join(process.cwd(), '/config.json');
    const configFile = await fs.readFileSync(filePath, 'utf-8').toString();

    const config = JSON.parse(configFile);

    const data = await this.appService.getById(config);
    return { data, config };
  }
}
