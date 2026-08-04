import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { BookApiService } from '../book-api.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  imports: [AsyncPipe],
  templateUrl: './book-detail.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './book-detail.component.scss',
})
export class BookDetailComponent {
  book$!: Observable<Book>;

  constructor(private readonly bookApi: BookApiService) {}

  @Input({ required: true })
  set isbn(isbn: string) {
    this.book$ = this.bookApi.getByIsbn(isbn);
  }
}
