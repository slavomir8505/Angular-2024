import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../../models/book';
import { BookComponent } from '../book/book.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { LibraryService } from '../../../library.service';


@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, BookComponent, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})

export class LibraryComponent {
  
  books!: Book[]
libraryservice: LibraryService=inject(LibraryService)
  constructor(){
    this.libraryservice.getAllBooks().subscribe(list=>{
      this.books = list
    })
  }
}
