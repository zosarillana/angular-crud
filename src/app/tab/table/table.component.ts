import { Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ReactiveFormsModule,MatTableModule, MatPaginator,MatPaginatorModule ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  displayedColumns: string[] = ['accountNumber', 'accountName', 'distributor', 'salesPersonel', 'areaName'];
  // displayedColumns: string[] = ['accountNumber', 'accountName', 'distributor', 'salesPersonel', 'areaName'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
// for periodic element
export interface PeriodicElement {
  accountNumber: number;
  accountName: string;
  distributor: string;
  salesPersonel: string;
  areaName: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {accountNumber: 1, accountName: 'Hydrogen', distributor: 'Distributor', salesPersonel: 'H', areaName:'Luzon'},
  {accountNumber: 2, accountName: 'Helium', distributor: 'Distributor', salesPersonel: 'H', areaName:'Luzon'},
  {accountNumber: 3, accountName: 'Lithium', distributor: 'Distributor', salesPersonel: 'H', areaName:'Luzon'},
  {accountNumber: 4, accountName: 'Beryllium', distributor: 'Distributor', salesPersonel: 'H', areaName:'Luzon'},
  {accountNumber: 5, accountName: 'Boron', distributor: 'Distributor',salesPersonel: 'H', areaName:'Luzon'},
  {accountNumber: 6, accountName: 'Carbon', distributor: 'Distributor', salesPersonel: 'H', areaName:'Luzon'},
  {accountNumber: 7, accountName: 'Nitrogen', distributor: 'Distributor', salesPersonel: 'H', areaName:'Luzon'},
  {accountNumber: 8, accountName: 'Oxygen', distributor: 'Distributor', salesPersonel: 'H', areaName:'Luzon'},
  {accountNumber: 9, accountName: 'Fluorine', distributor: 'Distributor', salesPersonel: 'H', areaName:'Luzon'},
  {accountNumber: 10, accountName: 'Neon', distributor: 'Distributor', salesPersonel: 'H', areaName:'Luzon'},
  {accountNumber: 11, accountName: 'Sodium', distributor: 'Distributor', salesPersonel: 'H', areaName:'Luzon'},
  {accountNumber: 12, accountName: 'Magnesium', distributor: 'Distributor', salesPersonel: 'H', areaName:'Luzon'},
  {accountNumber: 13, accountName: 'Aluminum', distributor: 'Distributor', salesPersonel: 'H', areaName:'Luzon'},
  {accountNumber: 14, accountName: 'Silicon', distributor: 'Distributor', salesPersonel: 'H', areaName:'Luzon'},
  {accountNumber: 15, accountName: 'Phosphorus', distributor: 'Distributor', salesPersonel: 'H', areaName:'Luzon'},
  {accountNumber: 16, accountName: 'Sulfur', distributor: 'Distributor',salesPersonel: 'H', areaName:'Luzon'},
  {accountNumber: 17, accountName: 'Chlorine', distributor: 'Distributor', salesPersonel: 'H', areaName:'Luzon'},
  {accountNumber: 18, accountName: 'Argon', distributor: 'Distributor',salesPersonel: 'H', areaName:'Luzon'},
  {accountNumber: 19, accountName: 'Potassium', distributor: 'Distributor', salesPersonel: 'H', areaName:'Luzon'},
  {accountNumber: 20, accountName: 'Calcium', distributor: 'Distributor', salesPersonel: 'H', areaName:'Luzon'},
];
