import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Book } from '../book';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-book-card',
    imports: [],
    templateUrl: './book-card.component.html',
    styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  customStyle = { color: '#064D9E', fontWeight: 600 };
  sanitizer = inject(DomSanitizer);
  book!: Book;
  @Input({ required: true })
  set content(book: Book) {
    if (typeof book.abstract === 'string') {
      this.book = { ...book, abstract: this.sanitizer.bypassSecurityTrustHtml(book.abstract) };
    } else {
      this.book = book
    }
  }

  @Output() detailClick = new EventEmitter<Book>();

  handleDetailClick(click: MouseEvent) {
    click.preventDefault();

    console.log('Click Details-Link:', click);

    this.detailClick.emit(this.book);
  }
}
