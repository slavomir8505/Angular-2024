import { Routes } from '@angular/router';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { LibraryComponent } from './components/library/library/library.component';
import { AddBookComponent } from './add-book/add-book.component';  // Changed from AddBook to AddBookComponent

export const routes: Routes = [
    {path: 'shoppingcart-component', component: ShoppingcartComponent},
    {path: 'library-component', component: LibraryComponent},
    {path: 'add-book', component: AddBookComponent}  // Changed from AddBook to AddBookComponent
];
