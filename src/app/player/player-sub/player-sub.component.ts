import { Component } from '@angular/core';

@Component({
  selector: 'player-sub',
  template: '<div>PLAYER SUB! {{ test }} {{ $yeet }}</div>',
  styles: [],
})
export class PlayerSubComponent {
  test = 'test!';
  $yeet = 'waw';
}
