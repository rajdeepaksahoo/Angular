import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneComponent } from './view-one.component';

describe('ViewOneComponent', () => {
  let component: ViewOneComponent;
  let fixture: ComponentFixture<ViewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
