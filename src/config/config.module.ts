import { Module } from '@nestjs/common';
import { ConfigController } from './config.controller';
import { ConfigService } from './config.service';
import { MongooseModule } from '@nestjs/mongoose';
import { configSchema } from './config.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Config', schema: configSchema }]),
  ],
  controllers: [ConfigController],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
