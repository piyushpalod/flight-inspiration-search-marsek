import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightInspirationSearchComponent } from './flight-inspiration-search.component';

describe('FlightInspirationSearchComponent', () => {
  let component: FlightInspirationSearchComponent;
  let fixture: ComponentFixture<FlightInspirationSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightInspirationSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightInspirationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
