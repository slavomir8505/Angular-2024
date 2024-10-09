import { Component, Input } from '@angular/core';
import { Book } from '../../../models/book';import { NgFor } from '@angular/common';
import { CommonModule, NgIf } from '@angular/common';


@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {
  @Input() book!: Book;
}
