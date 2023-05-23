import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreedReponse } from '@core/types';
import { BreedService } from '@shared/services/breed.service';

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html',
  styleUrls: ['./breed-detail.component.css'],
})
export class BreedDetailComponent implements OnInit {
  breed: BreedReponse | null = null;
  images: any[] = [];
  constructor(private router: ActivatedRoute, private breedSvc: BreedService) {}

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    this.breedSvc.getBreedByID(id).subscribe((b) => {
      this.breed = b as BreedReponse;
    });

    this.breedSvc.getImagesByBreed(id).subscribe((d) => {
      this.images = d as any[];
    });
  }
}
