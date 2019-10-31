import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandyLinksComponent } from './handy-links.component';

describe('HandyLinksComponent', () => {
  let component: HandyLinksComponent;
  let fixture: ComponentFixture<HandyLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandyLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandyLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
