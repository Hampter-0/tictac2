import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})

export class Register {
  constructor(private router: Router) { }

  username = '';
  email = '';
  password = '';
  confirmPassword = '';

  async onSubmit(event: Event) {
    event.preventDefault();

    console.log("yippee");
    try {
      const res = await fetch("http://localhost:3000/api/register", { //change with domain later ( first local testing :) 
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.username,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        })
      });

      console.log("status:", res.status);

      const data = await res.json();
      console.log("data:", data);

      if (res.status === 200 || res.status === 201) {
        this.router.navigate(['/login']);
      }

    } catch (err) {
      console.error("fetch error:", err);
    }
  }
}

