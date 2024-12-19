import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule, 
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(0)]],
      copies: ['', [Validators.required, Validators.min(1)]],
      genre: ['', Validators.required],
    });
  }

  onSubmit() {  // Changed from onsubmit to onSubmit to match template
    if (this.bookForm.valid) {
      console.log('New Book:', this.bookForm.value);
    }
  }

  onClear() {
    this.bookForm.reset();
  }
}
