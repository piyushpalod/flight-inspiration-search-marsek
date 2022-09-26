import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightInspirationShellComponent } from './flight-inspiration-shell.component';

describe('FlightInspirationShellComponent', () => {
  let component: FlightInspirationShellComponent;
  let fixture: ComponentFixture<FlightInspirationShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightInspirationShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightInspirationShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
