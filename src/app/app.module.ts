import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const imports: ModuleWithProviders<any> | Array<any> = [
  BrowserModule,
  AppRoutingModule,
  FeaturesModule,
  SharedModule,
  BrowserAnimationsModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
