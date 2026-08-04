import {
  Component,
  inject,
  DOCUMENT,
  ChangeDetectionStrategy,
} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout-button',
  template: '<button (click)="logout()">Log out</button>',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './logout-button.component.scss',
})
export class LogoutButtonComponent {
  private auth = inject(AuthService);
  private doc = inject(DOCUMENT);

  logout() {
    this.auth.logout({ logoutParams: { returnTo: this.doc.location.origin } });
  }
}
