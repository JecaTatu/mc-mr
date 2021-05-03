import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: MenuComponent,
    children: [
      { path: '', component: MainComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
