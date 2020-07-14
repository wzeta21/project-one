import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigInComponent } from './user/sig-in/sig-in.component';
import { RegisterComponent } from './user/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigInComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'home', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
