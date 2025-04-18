import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home page | Satendra Coder',
        pathMatch: 'full',
        component: ProductListComponent
    },
    {
        path: 'cart',
        title: 'Cart View Page| Satendra Coder',
        loadComponent: () => import('./components/cart/cart.component').then(m => m.CartComponent)
    }
];
