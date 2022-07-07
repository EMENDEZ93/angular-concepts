import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchsComponent } from './ngswitchs.component';

describe('NgswitchsComponent', () => {
  let component: NgswitchsComponent;
  let fixture: ComponentFixture<NgswitchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgswitchsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswitchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
