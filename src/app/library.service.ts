import { Injectable } from '@angular/core';
import { Book } from './models/book';
import { of, Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  books: Book[] = [
    {
      id: 1,
      title: 'Harry Potter 1 a Kameň mudrcov',
      author: 'Joanne K. Rowling',
      genre: 'Fantasy',
      available: true,
      pages: '256 pages'
    },
    {
      id: 2,
      title: 'Harry Potter 2 - A tajomná komnata',
      author: 'Joanne K. Rowling',
      genre: 'Fantasy',
      available: false,
      pages: '360 pages'
    },
    {
      id: 3,
      title: 'Harry Potter 3 - A väzeň z Azkabanu',
      author: 'Joanne K. Rowling',
      genre: 'Fantasy',
      available: true,
      pages: '440 pages'
    },
    {
      id: 4,
      title: 'Harry Potter 4 - A ohnivá čaša',
      author: 'Joanne K. Rowling',
      genre: 'Fantasy',
      available: true,
      pages: '712 pages'
    },

  ];
  constructor(){}
  getAllBooks(){
    return of(this.books).pipe(delay(
      2000
    ))
  };
}
