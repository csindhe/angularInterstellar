import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LittlboyfatmanRoutingModule } from './littlboyfatman-routing.module';
import { LbfmHomeComponent } from '../lfs-components/littleboyfatman/lbfm-home/lbfm-home.component';

@NgModule({
  declarations: [
    LbfmHomeComponent
  ],
  imports: [
    CommonModule,
    LittlboyfatmanRoutingModule
  ]
})
export class LittlboyfatmanModule { }
