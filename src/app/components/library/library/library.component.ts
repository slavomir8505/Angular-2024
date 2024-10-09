import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../../models/book';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})

export class LibraryComponent {

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
}
