import { Injectable } from '@angular/core';
import { Book } from './models/book';
import { of, Observable, delay,pipe,throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  link: string = "https://run.mocky.io/v3/08a2307a-f2b3-4f13-8e3e-8237f5f9e2dc"

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http
    .get<Book[]>(this.link)
    .pipe(delay(2000),tap((data) => console.log('GET data:', data)));
  }
}
