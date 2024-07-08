import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { ErrorModule } from './error/error.module';
import { LandingModule } from './landing/landing.module';
import { NewProductModule } from './new-product/new-product.module';
import { ProductModule } from './product/product.module';
import { RevenueModule } from './revenue/revenue.module';
import { SellModule } from './sell/sell.module';

const MODULE_MODULES = [
  LoginModule,
  LandingModule,
  ErrorModule,
  NewProductModule,
  ProductModule,
  RevenueModule,
  SellModule
];

@NgModule({
  imports: [
    ...MODULE_MODULES
  ],
  exports: [
    ...MODULE_MODULES
  ]
})
export class FeaturesModule { }
