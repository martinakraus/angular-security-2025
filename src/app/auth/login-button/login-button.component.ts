import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-login-button',
  template:
    '<button class="button_login" (click)="loginWithRedirect()">Login</button>',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './login-button.component.scss',
})
export class LoginButtonComponent {
  loginWithRedirect() {
    // ToDo implement login
  }
}
