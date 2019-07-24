import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'homepage' , component: HomepageComponent , canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/homepage'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
