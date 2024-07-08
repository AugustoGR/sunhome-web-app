import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './features/error/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then((module) => module.LoginModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./features/landing/landing.module').then((module) => module.LandingModule)
  },
  {
    path: 'newProduct',
    loadChildren: () => import('./features/new-product/new-product.module').then((module) => module.NewProductModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./features/product/product.module').then((module) => module.ProductModule)
  },
  {
    path: 'revenue',
    loadChildren: () => import('./features/revenue/revenue.module').then((module) => module.RevenueModule)
  },
  {
    path: 'sell',
    loadChildren: () => import('./features/sell/sell.module').then((module) => module.SellModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
