import {
  ApiResponse,
  SearchResponse,
  SearchViewModel,
  ApiErrorResponse,
} from './../../../models';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const URL = `https://test.api.amadeus.com/v1/shopping/flight-destinations`;

@Injectable({ providedIn: 'root' })
export class FlightInspirationService {
  constructor(private http: HttpClient) {}

  getSearchResults(
    searchCriteria: SearchViewModel
  ): Observable<SearchResponse[]> {
    return this.http
      .get<ApiResponse>(`${URL}?${this.getQueryString(searchCriteria)}`)
      .pipe(
        map((response: ApiResponse) => response.data),
        catchError(this.handleError)
      );
  }

  getQueryString(searchCriteria: SearchViewModel): string {
    let qString = `origin=${searchCriteria.origin}&oneWay=${searchCriteria.oneWay}&nonStop=${searchCriteria.nonStop}`;

    if (
      !searchCriteria.oneWay &&
      searchCriteria.duration !== null &&
      searchCriteria.duration !== undefined &&
      searchCriteria.duration !== ''
    )
      qString += `&duration=${searchCriteria.duration}`;
    if (
      searchCriteria.maxPrice !== null &&
      searchCriteria.maxPrice !== undefined &&
      searchCriteria.maxPrice.toString() !== ''
    )
      qString += `&maxPrice=${searchCriteria.maxPrice}`;

    if (
      searchCriteria.departureDate !== '' &&
      searchCriteria.departureDate !== null &&
      searchCriteria.departureDate !== undefined
    )
      qString += `&departureDate=${new Date(searchCriteria.departureDate)
        .toISOString()
        .substring(0, 10)}`;

    return qString;
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage: ApiErrorResponse = {
      status: error.error.errors[0].status,
      details: error.error.errors[0].detail,
      code: error.error.errors[0].code,
      title: error.error.errors[0].title,
    };
    return throwError(errorMessage);
  }
}
