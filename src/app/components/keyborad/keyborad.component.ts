import { Component, EventEmitter, Output } from '@angular/core';
import { KEYS } from './data/keyboard.constants';
import { IKeyboard } from './interface/keyboard.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-keyborad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keyborad.component.html',
  styleUrl: './keyborad.component.scss',
})
export class KeyboradComponent {
  @Output() keyInput: EventEmitter<string> = new EventEmitter<string>();
  readonly keys: IKeyboard[] = KEYS.map((key: IKeyboard) => key);

  onKeyClick(key: string) {
    this.keyInput.emit(key);
  }

  onKeyPress(key: string) {
    this.onKeyClick(key);
  }
}
