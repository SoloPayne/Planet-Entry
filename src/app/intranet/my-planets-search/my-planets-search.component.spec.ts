import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlanetsSearchComponent } from './my-planets-search.component';

describe('MyPlanetsSearchComponent', () => {
  let component: MyPlanetsSearchComponent;
  let fixture: ComponentFixture<MyPlanetsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPlanetsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPlanetsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
