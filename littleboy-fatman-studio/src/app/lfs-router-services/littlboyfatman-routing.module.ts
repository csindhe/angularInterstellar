import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LbfmHomeComponent } from '../lfs-components/littleboyfatman/lbfm-home/lbfm-home.component';
import { HomePageResolverService } from '../lfs-services/littleboyfatman/home-page-resolver.service';

const routes: Routes = [
  {path: 'littleboyfatman/home', component: LbfmHomeComponent, resolve: {movieData: HomePageResolverService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LittlboyfatmanRoutingModule { }
