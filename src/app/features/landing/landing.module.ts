import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

const MODULE_COMPONENTS = [
  LandingComponent
];

const MODULE_MODULES = [
  CommonModule,
  SharedModule,
  LandingRoutingModule,
  MatButtonModule,
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
export class LandingModule { }
