import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  constructor(private router: Router) { }

  username = '';
  password = '';

  async onSubmit(event: Event) {
    event.preventDefault();

    console.log("yippee");
    try {
      const res = await fetch("https://tictac2.hampternom.nl/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      });

      console.log("status:", res.status);

      const data = await res.json();
      console.log("data:", data);

      if (res.ok) {
        this.router.navigate(['/tictac2']);
      }


    } catch (err) {
      console.error("fetch error:", err);
    }
  }
}
