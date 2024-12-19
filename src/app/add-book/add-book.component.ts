import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule}

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,MatFormFieldModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})


export class AddBookComponent {
bookForm: FormGroup;

constructor(private fb: FormBuilder){
  this.bookForm= this.fb.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    year: ['', [Validators.required, Validators.min(0)]],
    copies: ['', [Validators.required, Validators.min(1)]],
    genre: ['', Validators.required],
  })
}

onsubmit() {
  if (this.bookForm.valid){
    console.log('New Book:', this.bookForm.value);
  }
}

onClear() {
  this.bookForm.reset();
}
}
import { Component } from '@angular/core';
