import { Component } from '@angular/core';
import { TicTac2Component } from './tic-tac-2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TicTac2Component],
  template: `<app-tic-tac-2></app-tic-tac-2>
  <p> test hampter XD </p>`,
})

export class AppComponent {}