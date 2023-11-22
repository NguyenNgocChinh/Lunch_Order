import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { IndexController } from './index.controller';
import { IndexService } from './index.service';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [IndexController],
  providers: [IndexService],
})
export class IndexModule {}
