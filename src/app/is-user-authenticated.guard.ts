import { CanMatchFn, Router } from "@angular/router";
import { UserStateService } from "./user-state.service";
import { inject } from "@angular/core";
import { tap } from "rxjs";

export const isUserAuthenticatedGuardFn: CanMatchFn = (route, state) => {
  const service = inject(UserStateService);
  const router = inject(Router);

  return service.isLoggedIn$.pipe(
    tap((isLoggedIn) => {
      if (!isLoggedIn) {
        router.navigate(["/login"]);
      }
    })
  );
};
