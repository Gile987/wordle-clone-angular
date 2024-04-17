import { Component } from '@angular/core';
import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-row',
  standalone: true,
  imports: [CellComponent],
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class RowComponent {}
