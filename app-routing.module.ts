import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { StudentDetailsComponent } from './student-details/student-details.component';  
import { LoginComponent } from './login/login.component';  
import { SignComponent } from './sign/sign.component';
  
export const routes: Routes = [  
  { path: '', component: LoginComponent, pathMatch: 'full' },  
  { path: 'login', component: LoginComponent },  
  { path: 'student-details', component: StudentDetailsComponent } , 
  { path: 'sigin', component: SignComponent } 
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
