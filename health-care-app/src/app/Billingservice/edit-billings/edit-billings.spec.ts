import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBillings } from './edit-billings';
import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';

describe('EditBillings', () => {
  let component: EditBillings;
  let fixture: ComponentFixture<EditBillings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBillings],
      providers: [provideZonelessChangeDetection(), provideHttpClient()]
 
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBillings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
