import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BreedsReponse, ImagesResponse } from '@core/types';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BreedService {
  private apiURL = environment.apiURL;
  private apiKEY = environment.apiKey;
  constructor(private breedSvc: HttpClient) {}

  getBreeds(): Observable<BreedsReponse> {
    return this.breedSvc.get<BreedsReponse>(`${this.apiURL}/breeds`);
  }
  getBreedByID(id: string) {
    return this.breedSvc.get(`${this.apiURL}/breeds/${id}`);
  }

  getImagesByBreed(id: string): Observable<ImagesResponse> {
    return this.breedSvc.get<ImagesResponse>(
      `${this.apiURL}/images/search?breed_ids=${id}&mime_types=jpg&size=small&limit=16&`,
      {
        headers: {
          'x-api-key': this.apiKEY,
        },
      }
    );
  }
}
