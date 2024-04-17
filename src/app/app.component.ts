import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeyboradComponent } from './components/keyborad/keyborad.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KeyboradComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wordle-clone-angular';

  handleKeyInput(key: string) {
    console.log('Key entered: ', key);
  }
}
