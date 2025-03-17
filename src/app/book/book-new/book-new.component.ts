import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { BookApiService } from '../book-api.service';
import { take } from 'rxjs';
import { validAuthorName } from '../validators/author.validator';
import { Book } from '../book';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
    selector: 'app-book-new',
    imports: [ReactiveFormsModule, NgIf, NgForOf, BookCardComponent],
    templateUrl: './book-new.component.html',
    styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent {
  newBook!: Book;
  submitted = false;
  form = this.formBuilder.nonNullable.group({
    title: ['', [Validators.required]],
    subtitle: [''],
    authors: this.formBuilder.array([['', [Validators.required, validAuthorName()]]]),
    abstract: [''],
    isbn: [''],
    cover: [''],
  });

  constructor(private readonly formBuilder: FormBuilder, private readonly bookApiService: BookApiService) {
  }

  submit() {
    // We need to handle the formArray now for authors separately
    // Unfortunately the backend doesn't handle multiple authors yet
    const firstAuthor = this.form.getRawValue().authors[0] || 'n/a';
    this.bookApiService.create({ ...this.form.getRawValue(), author: firstAuthor }).pipe(take(1)).subscribe(
      book => {
        this.newBook = book;
        this.submitted = true;
      }
    );
  }

  get authors(): FormArray {
    return this.form.controls['authors'] as FormArray;
  }

  deleteAuthor(authorIndex: number) {
    this.authors.removeAt(authorIndex);
  }

  addAuthor() {
    this.authors.push(new FormControl('', [Validators.required, validAuthorName()]));
  }
}
