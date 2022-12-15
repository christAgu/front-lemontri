import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesaviezvousComponent } from './lesaviezvous.component';

describe('LesaviezvousComponent', () => {
  let component: LesaviezvousComponent;
  let fixture: ComponentFixture<LesaviezvousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesaviezvousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LesaviezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
