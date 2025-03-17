import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book';

@Pipe({
  name: 'bookFilter',
  standalone: true
})
export class BookFilterPipe implements PipeTransform {
  /**
   * A note on defensive design
   * --------------------------
   *
   * We type books as Book[] or null here.
   * This is done because we do not know in which context "| bookFilter" is used.
   * For example "bookFilter" could sit in a chain of pipes that produce invalid values.
   *
   * That's why we want to make sure to handle possible null values explicitly.
   *
   * @param books A collection of books
   * @param searchTerm The search term to filter books
   */
  transform(
    books: Book[] | null | undefined,
    searchTerm: string | null
  ): Book[] {
    if (!searchTerm) {
      return books || [];
    }

    if (!books) {
      return [];
    }

    return books.filter(book =>
      book.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    /*
     * Bonus
     * -----
     * If you want to search in all fields the book provides you can iterate
     * through its properties. The code would look like this.
     *
     * return books.filter(
     *   book => this.matchBook(book, searchTerm)
     * );
     *
     * ...
     *
     *  private matchBook(book: { [key: string]: any }, searchTerm: string): boolean {
     *    return Object.keys(book)
     *      .filter(key => typeof book[key] === 'string')
     *      .some(key => book[key].toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
     *    );
     *  }
     */
  }
}
