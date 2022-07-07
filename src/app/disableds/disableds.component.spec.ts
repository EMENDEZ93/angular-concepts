import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledsComponent } from './disableds.component';

describe('DisabledsComponent', () => {
  let component: DisabledsComponent;
  let fixture: ComponentFixture<DisabledsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
