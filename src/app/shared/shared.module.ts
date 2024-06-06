import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./components/layout/layout.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ApiService } from "./services/api.service";
import { NgModule } from "@angular/core";
import { PageHeaderComponent } from "./components/page-header/page-header.component";
import { PageFooterComponent } from "./components/page-footer/page-footer.component";

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
];

const providers = [
  ApiService
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
