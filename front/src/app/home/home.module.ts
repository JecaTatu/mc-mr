import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './../material.module';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { NgImageSliderModule } from 'ng-image-slider';



@NgModule({
  declarations: [MenuComponent, MainComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    NgImageSliderModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
