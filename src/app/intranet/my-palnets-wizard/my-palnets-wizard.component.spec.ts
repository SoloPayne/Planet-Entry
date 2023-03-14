import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPalnetsWizardComponent } from './my-palnets-wizard.component';

describe('MyPalnetsWizardComponent', () => {
  let component: MyPalnetsWizardComponent;
  let fixture: ComponentFixture<MyPalnetsWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPalnetsWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPalnetsWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
