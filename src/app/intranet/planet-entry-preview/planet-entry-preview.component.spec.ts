import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetEntryPreviewComponent } from './planet-entry-preview.component';

describe('PlanetEntryPreviewComponent', () => {
  let component: PlanetEntryPreviewComponent;
  let fixture: ComponentFixture<PlanetEntryPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetEntryPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetEntryPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
