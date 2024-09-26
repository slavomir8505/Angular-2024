import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibraryComponent } from "./components/library/library.component";
import { BookComponent } from "./components/book/book.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LibraryComponent, BookComponent],
  templateUrl: './components/library/library.component.html',
  styleUrl: './components/library/library.component.css'
})
export class AppComponent {
  title = 'timo-angular';
}
