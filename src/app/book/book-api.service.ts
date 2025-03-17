import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  readonly #baseUrl = 'http://localhost:4730';

  constructor(private readonly http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.#baseUrl}/books`);
  }

  getByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.#baseUrl}/books/${isbn}`);
  }

  create(book: Partial<Book>): Observable<Book> {
    return this.http.post<Book>('http://localhost:4730/books', book);
  }
}
