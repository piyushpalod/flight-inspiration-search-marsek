import {
  SearchViewModel,
  ViewType,
} from './../../shared/models/search.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'fi-search',
  templateUrl: './flight-inspiration-search.component.html',
  styleUrls: ['./flight-inspiration-search.component.scss'],
})
export class FlightInspirationSearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<SearchViewModel>();

  form: FormGroup;
  viewTypes = Object.values(ViewType);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      origin: ['', Validators.required],
      departureDate: [''],
      oneWay: [false],
      duration: [''],
      nonStop: [false],
      maxPrice: [''],
      viewBy: [],
    });
  }

  ngOnInit(): void {}
  search() {
    if (this.form.valid) {
      this.onSearch.emit(this.form.value);
    }
  }
  onOneWayChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.form.get('duration')?.disable();
    } else {
      this.form.get('duration')?.enable();
    }
    this.form.updateValueAndValidity();
  }
}
