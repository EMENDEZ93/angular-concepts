import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelsComponent } from './ngmodels.component';

describe('NgmodelsComponent', () => {
  let component: NgmodelsComponent;
  let fixture: ComponentFixture<NgmodelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgmodelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmodelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
