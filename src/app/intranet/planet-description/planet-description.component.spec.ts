import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDescriptionComponent } from './planet-description.component';

describe('PlanetDescriptionComponent', () => {
  let component: PlanetDescriptionComponent;
  let fixture: ComponentFixture<PlanetDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
