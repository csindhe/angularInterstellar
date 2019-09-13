import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UrbancandidsRoutingModule } from './urbancandids-routing.module';
import { UcHomeComponent } from '../lfs-components/urbancandids/uc-home/uc-home.component';


@NgModule({
  declarations: [
    UcHomeComponent
  ],
  imports: [
    CommonModule,
    UrbancandidsRoutingModule
  ]
})
export class UrbancandidsModule { }
