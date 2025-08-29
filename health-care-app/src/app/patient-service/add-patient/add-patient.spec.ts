import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatient } from './add-patient';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('AddPatient', () => {
  let component: AddPatient;
  let fixture: ComponentFixture<AddPatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPatient],
      providers: [provideZonelessChangeDetection(), provideHttpClient()]
 
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPatient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
