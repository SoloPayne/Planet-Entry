import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPlanetImageryComponent } from './upload-planet-imagery.component';

describe('UploadPlanetImageryComponent', () => {
  let component: UploadPlanetImageryComponent;
  let fixture: ComponentFixture<UploadPlanetImageryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPlanetImageryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPlanetImageryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
