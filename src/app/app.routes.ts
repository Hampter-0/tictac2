import { Routes } from '@angular/router';
import { TicTac2Component } from './tic-tac-2.component';
import { SuperTicTac2Component } from './super-tic-tac-2/super-tic-tac-2.component';
import { Login } from './login/login'
import { Register } from './register/register'
import { Rules } from './rules/rules'

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
  {
    path: 'rules',
    component: Rules,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
];