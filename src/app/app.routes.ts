import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'cart',
        loadComponent: () => import('./components/cart/cart.component').then(m => m.CartComponent)
    }
];
