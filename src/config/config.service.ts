import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Config } from './config.model';

@Injectable()
export class ConfigService {
  constructor(
    @InjectModel('Config') private readonly configSchema: Model<Config>,
  ) {}

  /**
   * Find latest config
   * @returns configSchema
   */
  async findConfig(): Promise<any> {
    const data = await this.configSchema.findOne({}, {}, { sort: { _id: -1 } });
    return data?.toObject();
  }

  /**
   * Save the config
   * @returns configSchema
   */
  async saveConfig(data: any): Promise<any> {
    const config = await this.findConfig();

    if (!config) {
      const newConfig = new this.configSchema(data);
      const result = await newConfig.save();
      return result;
    } else {
      const updatedConfig = { ...config, ...data };
      const { _id, ...updateContent } = updatedConfig;
      const filter = { _id };
      const result = this.configSchema.findOneAndUpdate(filter, updateContent);
      return result;
    }
  }
}
