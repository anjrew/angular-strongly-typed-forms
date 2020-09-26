import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxTypedReactiveFormComponent } from './components/pages/ngx-typed-reactive-form/ngx-typed-reactive-form.component';
import { NgStackFormsComponent } from './components/pages/ng-stack-forms/ng-stack-forms.component';
import { NgStackFormsModule } from '@ng-stack/forms';


@NgModule({
  declarations: [
    AppComponent,
    NgxTypedReactiveFormComponent,
    NgStackFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgStackFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
