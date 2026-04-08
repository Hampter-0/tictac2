import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.html',
  styleUrl: './rules.css',
  imports: [RouterModule],
})

export class Rules {
  constructor(private router: Router) {

  }
}
