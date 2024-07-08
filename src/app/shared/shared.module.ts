import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./components/layout/layout.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ApiService } from "./services/api.service";
import { NgModule } from "@angular/core";
import { PageHeaderComponent } from "./components/page-header/page-header.component";
import { PageFooterComponent } from "./components/page-footer/page-footer.component";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'; 
import { CredentialService } from "./services/credential.service";
import { ProductService } from "./services/product.service";
const components = [
  LayoutComponent,
  PageHeaderComponent,
  PageFooterComponent,
];

const modules = [
  CommonModule,
  HttpClientModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
];

const providers = [
  ApiService,
  CredentialService,
  ProductService
]

@NgModule({
  declarations: [
    ...components,
  ],
  providers: [
    ...providers
  ],
  imports: [
    ...modules,

  ],
  exports: [
    ...modules,
    ...components,
  ]
})
export class SharedModule { }
