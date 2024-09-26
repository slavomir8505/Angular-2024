import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookList } from '../../models/book';
import { LibraryComponent } from "../library/library.component";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, LibraryComponent],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() bookList!: BookList;
}
