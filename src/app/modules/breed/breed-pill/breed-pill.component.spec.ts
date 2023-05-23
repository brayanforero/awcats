import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedPillComponent } from './breed-pill.component';

describe('BreedPillComponent', () => {
  let component: BreedPillComponent;
  let fixture: ComponentFixture<BreedPillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreedPillComponent]
    });
    fixture = TestBed.createComponent(BreedPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
