import { Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { confirmLeaveGuardFn } from './confirm-leave.guard';
import { BookNewComponent } from './book-new/book-new.component';

export const bookRoutes: Routes = [
  {
    path: '',
    component: BookComponent
  },
  {
    path: 'new',
    component: BookNewComponent
  },
  {
    path: 'detail/:isbn',
    component: BookDetailComponent,
    canDeactivate: [confirmLeaveGuardFn]
  }
];
