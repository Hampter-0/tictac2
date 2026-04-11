import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-account',
  imports: [RouterModule],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account {
  constructor(private router: Router) {

  }
}
