import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Controller('config')
export class ConfigController {
  @Get()
  @Render('config')
  config() {
    global.appRoot = path.resolve(__dirname);
    const filePath = path.join(process.cwd(), '/config.json');
    const configFile = fs.readFileSync(filePath, 'utf-8').toString();
    return { config: JSON.parse(configFile) };
  }

  @Post()
  saveConfig(@Body() body) {
    // const filePath = path.join(process.cwd(), '/config.json');
    // const configFile = fs.writeFileSync(filePath, body);
    const filePath = path.join(process.cwd(), '/config.json');
    fs.writeFileSync(filePath, JSON.stringify(body));
    return 1;
  }
}
