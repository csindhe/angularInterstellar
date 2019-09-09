import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularHomeComponent } from './angular-home/angular-home.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AngularHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
