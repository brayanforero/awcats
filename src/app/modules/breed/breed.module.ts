import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedRoutingModule } from './breed-routing.module';
import { BreedsComponent } from './breeds/breeds.component';
import { BreedPillComponent } from './breed-pill/breed-pill.component';
import { BreedDetailComponent } from './breed-detail/breed-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BreedsComponent, BreedPillComponent, BreedDetailComponent],
  imports: [CommonModule, BreedRoutingModule, RouterModule],
})
export class BreedModule {}
