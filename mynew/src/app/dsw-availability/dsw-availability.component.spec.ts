import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DswAvailabilityComponent } from './dsw-availability.component';

describe('DswAvailabilityComponent', () => {
  let component: DswAvailabilityComponent;
  let fixture: ComponentFixture<DswAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DswAvailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DswAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
