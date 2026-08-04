import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  template:
    '<button class="button_login" (click)="loginWithRedirect()">Log in</button>',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './login-button.component.scss',
})
export class LoginButtonComponent {
  private readonly auth = inject(AuthService);
  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }
}
