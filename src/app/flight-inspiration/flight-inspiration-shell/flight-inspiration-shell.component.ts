import { catchError } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchResponse, ApiErrorResponse } from 'src/app/shared/models';
import { SearchViewModel } from './../../shared/models/search.model';
import { FlightInspirationService } from './../../shared/services/api/flight-inspiration/flight-inspiration.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'fi-shell',
  templateUrl: './flight-inspiration-shell.component.html',
  styleUrls: ['./flight-inspiration-shell.component.scss'],
})
export class FlightInspirationShellComponent implements OnInit {
  searchResults$!: Observable<SearchResponse[]>;

  constructor(
    private flightInspirationService: FlightInspirationService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  getResults(searchCriteria: SearchViewModel) {
    this.searchResults$ = this.flightInspirationService
      .getSearchResults(searchCriteria)
      .pipe(
        catchError((error: ApiErrorResponse) => {
          this._snackBar.open(error.details, '', { duration: 1000 });
          return of([]);
        })
      );
  }
}
