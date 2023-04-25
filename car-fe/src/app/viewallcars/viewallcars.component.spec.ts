import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallcarsComponent } from './viewallcars.component';

describe('ViewallcarsComponent', () => {
  let component: ViewallcarsComponent;
  let fixture: ComponentFixture<ViewallcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallcarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
