import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatient } from './view-patient';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('ViewPatient', () => {
  let component: ViewPatient;
  let fixture: ComponentFixture<ViewPatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPatient],
      providers: [provideZonelessChangeDetection(), provideHttpClient()]
 
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPatient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
