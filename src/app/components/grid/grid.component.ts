import { Component } from '@angular/core';
import { RowComponent } from '../row/row.component';
import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-grid',
  standalone: true,
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  imports: [RowComponent, CellComponent],
})
export class GridComponent {}
