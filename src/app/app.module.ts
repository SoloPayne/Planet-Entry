import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {IntranetModule} from "./intranet/intranet.module";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    IntranetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
