import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLmntComponent } from './header-lmnt.component';

describe('HeaderLmntComponent', () => {
  let component: HeaderLmntComponent;
  let fixture: ComponentFixture<HeaderLmntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLmntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
