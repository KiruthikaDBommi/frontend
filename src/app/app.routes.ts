// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
                 

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

