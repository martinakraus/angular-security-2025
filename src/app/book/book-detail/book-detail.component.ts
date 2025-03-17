import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { BookApiService } from '../book-api.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
    selector: 'app-book-detail',
    imports: [AsyncPipe, NgIf],
    templateUrl: './book-detail.component.html',
    styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  book$!: Observable<Book>;

  constructor(private readonly bookApi: BookApiService) {}

  @Input({ required: true })
  set isbn(isbn: string) {
    this.book$ = this.bookApi.getByIsbn(isbn);
  }
}
