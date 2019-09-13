import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UcHomeComponent } from '../lfs-components/urbancandids/uc-home/uc-home.component';

const routes: Routes = [
  {path: 'urbancandids/home', component: UcHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UrbancandidsRoutingModule { }
