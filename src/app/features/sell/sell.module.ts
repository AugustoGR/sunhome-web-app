import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SellComponent } from './pages/sell/sell.component';
import { SellRoutingModule } from './sell-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MODULE_COMPONENTS = [
  SellComponent
];

const MODULE_MODULES = [
  CommonModule,
  SharedModule,
  SellRoutingModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatCheckboxModule,
  MatSnackBarModule
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
export class SellModule { }
