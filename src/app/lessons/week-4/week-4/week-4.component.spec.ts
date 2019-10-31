import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Week4Component } from './week-4.component';

describe('Week4Component', () => {
  let component: Week4Component;
  let fixture: ComponentFixture<Week4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Week4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Week4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
