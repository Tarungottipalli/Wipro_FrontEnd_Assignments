import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBillings } from './add-billings';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('AddBillings', () => {
  let component: AddBillings;
  let fixture: ComponentFixture<AddBillings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBillings],
      providers: [provideZonelessChangeDetection(), provideHttpClient()]
 
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBillings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
