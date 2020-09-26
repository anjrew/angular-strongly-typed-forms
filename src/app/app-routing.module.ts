import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxTypedReactiveFormComponent } from './components/pages/ngx-typed-reactive-form/ngx-typed-reactive-form.component';
import { NgStackFormsComponent } from './components/pages/ng-stack-forms/ng-stack-forms.component';

const routes: Routes = [
  {
    path: 'ngx-typed-reactive-form',
    component: NgxTypedReactiveFormComponent
  },
  {
    path: 'ng-stack-forms',
    component: NgStackFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
