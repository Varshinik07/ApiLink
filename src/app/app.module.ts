import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PublicapiComponent } from './publicapi/publicapi.component';
import{RouterModule,Routes} from '@angular/router';
import {  HttpClientModule} from '@angular/common/http';
const appRoutes:Routes=[
  {
    path:"",component:PublicapiComponent
  },
  
  
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PublicapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
