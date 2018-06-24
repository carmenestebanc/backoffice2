import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsUpdateComponent } from './reservations-update.component';

describe('ReservationsUpdateComponent', () => {
  let component: ReservationsUpdateComponent;
  let fixture: ComponentFixture<ReservationsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
