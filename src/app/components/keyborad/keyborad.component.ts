import { Component, EventEmitter, Output } from '@angular/core';
import { KEYS } from './data/keyboard.constants';
import { IKeyboard } from './interface/keyboard.interface';

@Component({
  selector: 'app-keyborad',
  standalone: true,
  imports: [],
  templateUrl: './keyborad.component.html',
  styleUrl: './keyborad.component.scss',
})
export class KeyboradComponent {
  @Output() keyPress: EventEmitter<string> = new EventEmitter<string>();
  readonly keys: IKeyboard[] = KEYS.map((key: IKeyboard) => key);

  onKeyPress(key: IKeyboard) {
    this.keyPress.emit(key.value);
  }
}
