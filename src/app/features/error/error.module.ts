import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorRoutingModule } from './error-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SharedModule } from 'src/app/shared/shared.module';

const MODULE_COMPONENTS = [
  NotFoundComponent
];

const MODULE_MODULES = [
  CommonModule,
  SharedModule,
  ErrorRoutingModule
];

@NgModule({
  declarations: [
    ...MODULE_COMPONENTS
  ],
  imports: [
    ...MODULE_MODULES
  ]
})
export class ErrorModule { }
