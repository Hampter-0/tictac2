import { Routes } from '@angular/router';
import { TicTac2Component } from './tic-tac-2.component';
import { SuperTicTac2Component } from './super-tic-tac-2.component';

export const routes: Routes = [
  { path: '', redirectTo: '/tictac2', pathMatch: 'full' },
  {
    path: 'tictac2',
    component: TicTac2Component,
  },
  {
    path: 'supertictac2',
    component: SuperTicTac2Component,
  },
];