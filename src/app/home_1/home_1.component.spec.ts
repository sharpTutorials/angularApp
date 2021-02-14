import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home_1Component } from './home_1.component';

describe('Home_1Component', () => {
  let component: Home_1Component;
  let fixture: ComponentFixture<Home_1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home_1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home_1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
