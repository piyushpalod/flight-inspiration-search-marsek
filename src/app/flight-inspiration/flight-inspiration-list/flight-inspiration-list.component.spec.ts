import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightInspirationListComponent } from './flight-inspiration-list.component';

describe('FlightInspirationListComponent', () => {
  let component: FlightInspirationListComponent;
  let fixture: ComponentFixture<FlightInspirationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightInspirationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightInspirationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
