import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevenueComponent } from './pages/revenue/revenue.component';

const routes: Routes = [
  { path: '', component: RevenueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevenueRoutingModule { }
