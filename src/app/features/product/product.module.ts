import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from './pages/product/product.component';
import { ProductRoutingModule } from './product-routing.module';


const MODULE_COMPONENTS = [
  ProductComponent
];

const MODULE_MODULES = [
  CommonModule,
  SharedModule,
  ProductRoutingModule,
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
export class ProductModule { }
