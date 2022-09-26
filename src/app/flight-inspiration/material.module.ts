import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
  ],
  providers: [],
})
export class MaterialModule {}
