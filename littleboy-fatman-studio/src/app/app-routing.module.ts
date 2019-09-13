import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LfsHomeComponent } from './lfs-components/lfs-home/lfs-home.component';
import { LfsPagenotfoundComponent } from './lfs-components/lfs-pagenotfound/lfs-pagenotfound.component';

const routes: Routes = [
  {path: 'home', component: LfsHomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: LfsPagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
