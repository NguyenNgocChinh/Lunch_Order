import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private readonly httpService: HttpService) {}

  async getById({ idRestaurant, latitude, longitude }): Promise<any> {
    const apiTest = `https://portal.grab.com/foodweb/v2/merchants/${idRestaurant}?latlng=${latitude},${longitude}`;

    const { data } = await firstValueFrom(
      this.httpService.get<any>(apiTest).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}
