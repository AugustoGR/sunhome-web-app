import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { ErrorModule } from './error/error.module';

const MODULE_MODULES = [
  LoginModule,
  ErrorModule
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
