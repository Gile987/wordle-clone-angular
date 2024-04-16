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
  @Output() keyClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() keyPress: EventEmitter<KeyboardEvent> =
    new EventEmitter<KeyboardEvent>();
  readonly keys: IKeyboard[] = KEYS.map((key: IKeyboard) => key);

  onKeyClick(key: IKeyboard) {
    this.keyClick.emit(key.value);
  }

  onKeyPress(event: KeyboardEvent) {
    this.keyPress.emit(event);
  }
}
