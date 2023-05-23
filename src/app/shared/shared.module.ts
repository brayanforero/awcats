import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { BreedService } from './services/breed.service';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [NavbarComponent],
  providers: [BreedService],
})
export class SharedModule {}
