import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/api/auth';
import { FlightInspirationService } from './shared/services/api/flight-inspiration/flight-inspiration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthService, private flightInspirationService: FlightInspirationService) {}
  title = 'flight-inspirations-search-marsek';
  ngOnInit(): void {
    //In general, this needs to be done when we click on Login button. But in order to get the data from backend api we need to be logged in.
    this.authService.authenticateUser();
    //this.flightInspirationService.getSearchResults({} as any).subscribe();
  }
}
