import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class IndexService {
  private readonly logger = new Logger(IndexService.name);
  constructor(private httpService: HttpService) {}

  async getIndex({ idRestaurant, latitude, longitude }): Promise<any> {
    const api = `https://portal.grab.com/foodweb/v2/merchants/${idRestaurant}?latlng=${latitude},${longitude}`;
    const { data } = await firstValueFrom(
      this.httpService.get<any>(api).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}
