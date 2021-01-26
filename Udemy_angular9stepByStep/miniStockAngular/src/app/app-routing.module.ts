import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** import หน้าที่จะทำ route เข้ามา */
import { LoginRegisterComponent } from './login-register/login-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  { path:"", component:LoginRegisterComponent}, // หน้าแรก
  { path:"dashboard" , component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
