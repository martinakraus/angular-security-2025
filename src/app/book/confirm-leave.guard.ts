import { CanDeactivateFn } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';

export const confirmLeaveGuardFn: CanDeactivateFn<BookDetailComponent> = (
  route,
  state
) => {
  const wantsToLeave = confirm('Do you really want to leave?');

  return wantsToLeave;
};
