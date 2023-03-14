import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlanetDetailsComponent } from './my-planet-details.component';

describe('MyPlanetDetailsComponent', () => {
  let component: MyPlanetDetailsComponent;
  let fixture: ComponentFixture<MyPlanetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPlanetDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPlanetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
