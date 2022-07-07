import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgsubmitsComponent } from './ngsubmits.component';

describe('NgsubmitsComponent', () => {
  let component: NgsubmitsComponent;
  let fixture: ComponentFixture<NgsubmitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgsubmitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgsubmitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
