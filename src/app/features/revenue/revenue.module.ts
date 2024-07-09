import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RevenueComponent } from './pages/revenue/revenue.component';
import { RevenueRoutingModule } from './revenue-routing.module';
import { MatTableModule } from '@angular/material/table';


const MODULE_COMPONENTS = [
  RevenueComponent
];

const MODULE_MODULES = [
  CommonModule,
  SharedModule,
  RevenueRoutingModule,
  MatTableModule
];

@NgModule({
  declarations: [
    ...MODULE_COMPONENTS
  ],
  imports: [
    ...MODULE_MODULES
  ],
  exports: [
    ...MODULE_COMPONENTS
  ]
})
export class RevenueModule { }
