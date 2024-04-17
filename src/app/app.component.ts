import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { RowComponent } from './components/row/row.component';
import { CellComponent } from './components/cell/cell.component';
import { KeyboradComponent } from './components/keyborad/keyborad.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GridComponent,
    RowComponent,
    CellComponent,
    KeyboradComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wordle-clone-angular';

  handleKeyInput(key: string) {
    console.log('Key entered: ', key);
  }
}
