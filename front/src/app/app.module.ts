import { MaterialModule } from './material.module';
import { HomeModule } from './home/home.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    MaterialModule,
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
