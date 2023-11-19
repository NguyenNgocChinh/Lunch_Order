import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class RestaurantService {
  private readonly logger = new Logger(RestaurantService.name);
  constructor(private readonly httpService: HttpService) {}

  async search({ latitude, longitude }, keyword): Promise<any> {
    const apiUrl = `https://portal.grab.com/foodweb/v2/search`;
    const payload = {
      latlng: `${latitude},${longitude}`,
      keyword,
      offset: 0,
      pageSize: 32,
      countryCode: 'VN',
    };
    const { data } = await firstValueFrom(
      this.httpService.post<any>(apiUrl, payload).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data.searchResult;
  }
}
