import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserStateService {
  isLoggedIn = true;
}
