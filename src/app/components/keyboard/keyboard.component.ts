import { Component, EventEmitter, Output } from '@angular/core';
import { KEYS } from './data/keyboard.constants';
import { IKeyboard } from './interface/keyboard.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.scss',
})
export class KeyboardComponent {
  @Output() keyInput: EventEmitter<string> = new EventEmitter<string>();
  readonly keys: IKeyboard[] = KEYS.map((key: IKeyboard) => key);

  onKeyClick(key: string) {
    this.keyInput.emit(key);
  }
}
