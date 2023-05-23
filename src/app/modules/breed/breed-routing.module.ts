import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedsComponent } from './breeds/breeds.component';
import { BreedDetailComponent } from './breed-detail/breed-detail.component';

const routes: Routes = [
  {
    path: ':id',
    component: BreedDetailComponent,
  },
  {
    path: '**',
    component: BreedsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreedRoutingModule {}
