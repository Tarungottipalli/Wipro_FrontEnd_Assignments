import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedical } from './add-medicals';
import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';

describe('AddMedicals', () => {
  let component: AddMedical;
  let fixture: ComponentFixture<AddMedical>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMedical],
      providers: [provideZonelessChangeDetection(), provideHttpClient()]
 
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMedical);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
