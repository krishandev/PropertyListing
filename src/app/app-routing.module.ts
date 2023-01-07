import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PropertiesComponent } from './properties/properties.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:'properties',
    component:PropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
