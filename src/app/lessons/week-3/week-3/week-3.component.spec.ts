import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Week3Component } from './week-3.component';

describe('Week3Component', () => {
  let component: Week3Component;
  let fixture: ComponentFixture<Week3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Week3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Week3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
