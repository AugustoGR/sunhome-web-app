import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { NewProductRoutingModule } from './new-product-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MODULE_COMPONENTS = [
  NewProductComponent
];

const MODULE_MODULES = [
  CommonModule,
  SharedModule,
  NewProductRoutingModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  ReactiveFormsModule,
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
export class NewProductModule { }
