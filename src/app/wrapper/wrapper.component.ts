import { Component } from '@angular/core';
import { GridComponent } from '../components/grid/grid.component';
import { RowComponent } from '../components/row/row.component';
import { CellComponent } from '../components/cell/cell.component';
import { KeyboardComponent } from '../components/keyboard/keyboard.component';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [GridComponent, RowComponent, CellComponent, KeyboardComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss',
})
export class WrapperComponent {
  handleKeyInput(key: string) {
    console.log('Key entered: ', key);
  }
}
