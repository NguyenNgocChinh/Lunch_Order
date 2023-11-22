import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export type ConfigDoc = Config & Document;

export const configSchema = new mongoose.Schema({
  sheet: { type: String, required: true },
  idRestaurant: { type: String, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
});

configSchema.index({ _id: 1, seq: 1 }, { unique: true });

export interface Config extends Document {
  id: string;
  sheet: string;
  idRestaurant: string;
  latitude: string;
  longitude: string;
}
