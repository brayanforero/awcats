import { Component, OnInit } from '@angular/core';
import { ImageResponse } from '@core/types';
import { BreedService } from '@shared/services/breed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  currentImage: ImageResponse | null = null;

  constructor(private breedSvc: BreedService) {}

  ngOnInit(): void {
    this.breedSvc.getRandomImage().subscribe((images) => {
      this.currentImage = images.at(0) as ImageResponse;
      this.loading = false;
    });
  }
}
