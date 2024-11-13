import { Routes } from '@angular/router';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { LibraryComponent } from './components/library/library/library.component';

export const routes: Routes = [
    {path: 'shoppingcart-component', component: ShoppingcartComponent},
    {path: 'library-component', component: LibraryComponent},
];
