import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../book/book.component';
import { BookList} from '../../models/book';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})

export class LibraryComponent {

bookList: BookList = {
  id: 1,
  title: 'Test Book',
  author: 'Test Author',
  genre: 'Test Genre',
  available: true,
  pages: '200p',
};
}
