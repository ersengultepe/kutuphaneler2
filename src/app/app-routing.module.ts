import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    {
    path: "",
    component: LayoutsComponent,
    children: [
      {
        path: "",
        component: BootstrapComponent,        
      }
    ]
  },  
  {
    path: "login",
    component: LoginComponent
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
