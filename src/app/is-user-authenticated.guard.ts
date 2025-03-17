import { CanMatchFn } from '@angular/router';
import { UserStateService } from './user-state.service';
import { inject } from '@angular/core';

export const isUserAuthenticatedGuardFn: CanMatchFn = (route, state) => {
  const service = inject(UserStateService);

  return service.isLoggedIn;
};
