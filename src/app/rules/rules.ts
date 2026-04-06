import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rules',
  imports: [],
  templateUrl: './rules.html',
  styleUrl: './rules.css',
})

export class Rules {
  constructor(private router: Router) {

    }

   goToTictac2() {
    this.router.navigate(['/tictac2'])
  }

}
