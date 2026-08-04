import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginButtonComponent } from '../auth/login-button/login-button.component';
import { LogoutButtonComponent } from '../auth/logout-button/logout-button.component';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe } from '@angular/common';
import { tap } from 'rxjs';

@Component({
  selector: 'app-navigation',
  imports: [
    RouterLink,
    RouterLinkActive,
    LoginButtonComponent,
    LogoutButtonComponent,
    AsyncPipe,
  ],
  templateUrl: './navigation.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  isAuthenticated$ = inject(AuthService).isAuthenticated$.pipe(
    tap(console.log),
  );
}
