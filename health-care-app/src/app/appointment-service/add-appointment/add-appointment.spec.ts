import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointment } from './add-appointment';
import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';

describe('AddAppointment', () => {
  let component: AddAppointment;
  let fixture: ComponentFixture<AddAppointment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAppointment],
      providers: [provideZonelessChangeDetection(), provideHttpClient()]
 
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAppointment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
