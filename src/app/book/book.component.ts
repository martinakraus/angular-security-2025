import { Component, Signal } from "@angular/core";
import { BookCardComponent } from "./book-card/book-card.component";
import { BookFilterPipe } from "./book-filter/book-filter.pipe";
import { Book } from "./book";
import { CommonModule } from "@angular/common";
import { BookApiService } from "./book-api.service";
import { toSignal } from "@angular/core/rxjs-interop";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-book",
  imports: [CommonModule, BookCardComponent, BookFilterPipe, RouterLink],
  templateUrl: "./book.component.html",
  styleUrl: "./book.component.scss",
})
export class BookComponent {
  bookSearchTerm = "";
  books: Signal<Book[] | undefined>;

  constructor(
    private readonly bookApi: BookApiService,
    private readonly router: Router
  ) {
    this.books = toSignal(this.bookApi.getAll());
  }

  goToBookDetails(book: Book) {
    this.router.navigate(["books", "detail", book.isbn]);
  }

  updateBookSearchTerm(input: Event) {
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }
}
