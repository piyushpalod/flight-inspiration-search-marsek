import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SearchResponse } from 'src/app/shared/models';

@Component({
  selector: 'fi-list',
  templateUrl: './flight-inspiration-list.component.html',
  styleUrls: ['./flight-inspiration-list.component.scss'],
})
export class FlightInspirationListComponent
  implements OnInit, OnChanges, AfterViewInit {
  @Input() results!: SearchResponse[] | null;
  displayedColumns: string[] = [
    'departureDate',
    'destination',
    'origin',
    'returnDate',
    'type',
    'price',
  ];
  dataSource: any;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.results ?? []);
  }

  ngOnInit(): void {}

  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
