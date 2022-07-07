import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifsComponent } from './ngifs.component';

describe('NgifsComponent', () => {
  let component: NgifsComponent;
  let fixture: ComponentFixture<NgifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
