import { Component, Input } from '@angular/core';
import { Book } from '../../../models/book';import { NgFor } from '@angular/common';
import { CommonModule, NgIf } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, NgIf, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {
  @Input() book!: Book;

  onOrder() {
    this.book.available=false

  }

  
}

