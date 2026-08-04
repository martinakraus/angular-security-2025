import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-logout-button',
  template: '<button (click)="logout()">Logout</button>',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './logout-button.component.scss',
})
export class LogoutButtonComponent {
  logout() {
    // ToDo implement logout
  }
}
