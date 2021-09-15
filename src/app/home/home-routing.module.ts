import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent,
    children: [
      {
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule'
      }
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
