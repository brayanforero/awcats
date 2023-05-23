import { Component, OnInit } from '@angular/core';
import { BreedReponse, BreedsReponse } from '@core/types';
import { BreedService } from '@shared/services/breed.service';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css'],
})
export class BreedsComponent implements OnInit {
  loading: boolean = true;
  breeds: BreedReponse[] = [];
  constructor(private breedSvc: BreedService) {}
  ngOnInit(): void {
    const cacheBreeds = localStorage.getItem('breeds');
    if (cacheBreeds != null) {
      this.breeds = JSON.parse(cacheBreeds) as BreedsReponse;
      this.loading = false;
      return;
    }
    this.loadBreeds();
  }

  private loadBreeds(): void {
    this.breedSvc.getBreeds().subscribe((data) => {
      this.breeds = data;
      this.loading = false;
      localStorage.setItem('breeds', JSON.stringify(data));
    });
  }
}
