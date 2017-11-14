import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

// ********************** angular-modal-gallery *****************************
import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs)
import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap)
import { ModalGalleryModule } from 'angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// **************************************************************************

@NgModule({
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule,
    AboutModule, HomeModule, SharedModule.forRoot(),
    ModalGalleryModule.forRoot() // <-------------------------------------------- angular-modal-gallery module import
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
