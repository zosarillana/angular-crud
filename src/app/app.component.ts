import {ChangeDetectionStrategy, AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
//css
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

//pagination
import { MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

//input forms
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

//tabs 
import {MatTabsModule} from '@angular/material/tabs';

//imports
import { ChecklistComponent } from '../app/tab/checklist/checklist.component'; 
import { TableComponent } from '../app/tab/table/table.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatTableModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSortModule,
    MatPaginator,
    MatPaginatorModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatTabsModule,
    ChecklistComponent,
    TableComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  displayedColumns: string[] = ['accountNumber', 'accountName', 'distributor', 'salesPersonel', 'areaName'];
  // displayedColumns: string[] = ['accountNumber', 'accountName', 'distributor', 'salesPersonel', 'areaName'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // areaSource = ELEMENT_DATA_AREA;
  title = 'Check list ';
  titleTable = 'Data table';

  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
}


export interface Area {
  value: string;
  viewValue: string;
  
}
const ELEMENT_DATA_AREA: Area[] = [
  {value: 'Luzon', viewValue: 'Luzon'},
  {value: 'Mindanao', viewValue: 'Mindanao'},
];

