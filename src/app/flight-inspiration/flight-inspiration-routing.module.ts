import { FlightInspirationShellComponent } from './flight-inspiration-shell/flight-inspiration-shell.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'flight-inspiration', component: FlightInspirationShellComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightInspirationRoutingModule {}
