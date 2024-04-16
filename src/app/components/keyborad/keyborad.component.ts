import { Component } from '@angular/core';
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
  keys: IKeyboard[] = KEYS.map((key) => key);
}
