import { SafeResourceUrl, SafeScript } from '@angular/platform-browser';

export interface Book {
  isbn: string;
  cover: string | SafeResourceUrl;
  title: string;
  abstract: string | SafeScript;
  author: string;
}
