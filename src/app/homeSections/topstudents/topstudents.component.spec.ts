import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStudentsComponent } from './topstudents.component';

describe('AlertsSectionComponent', () => {
  let component: TopStudentsComponent;
  let fixture: ComponentFixture<TopStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
