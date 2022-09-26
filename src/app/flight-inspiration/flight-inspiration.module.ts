import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightInspirationListComponent } from './flight-inspiration-list/flight-inspiration-list.component';
import { FlightInspirationRoutingModule } from './flight-inspiration-routing.module';
import { FlightInspirationSearchComponent } from './flight-inspiration-search/flight-inspiration-search.component';
import { FlightInspirationShellComponent } from './flight-inspiration-shell/flight-inspiration-shell.component';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    FlightInspirationShellComponent,
    FlightInspirationListComponent,
    FlightInspirationSearchComponent,
  ],
  imports: [
    CommonModule,
    FlightInspirationRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [],
  providers: [],
})
export class FlightInspirationModule {}
