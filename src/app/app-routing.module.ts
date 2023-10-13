import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: ()=>import('./layout/layout.module').then(mod => mod.LayoutModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'dashboards', component: DashboardsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }