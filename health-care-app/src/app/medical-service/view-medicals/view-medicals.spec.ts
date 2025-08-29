import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedical } from './view-medicals';

describe('ViewMedicals', () => {
  let component: ViewMedical;
  let fixture: ComponentFixture<ViewMedical>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMedical]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMedical);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
