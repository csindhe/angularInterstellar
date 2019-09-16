import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LfsHomeComponent } from './lfs-components/lfs-home/lfs-home.component';
import { HttpClientModule } from '@angular/common/http';

import { LfsPagenotfoundComponent } from './lfs-components/lfs-pagenotfound/lfs-pagenotfound.component';
import { LittlboyfatmanModule } from './lfs-router-services/littlboyfatman.module';
import { UrbancandidsModule } from './lfs-router-services/urbancandids.module';
import { LfsFooterComponent } from './lfs-components/lfs-footer/lfs-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LfsHomeComponent,
    LfsPagenotfoundComponent,
    LfsFooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    LittlboyfatmanModule,
    UrbancandidsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
