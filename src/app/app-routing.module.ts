import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KameraComponent} from '../../src/app/component/kamera/kamera.component'
import { from } from 'rxjs';
const routes: Routes = [
  {path:'',pathMatch: 'full' ,component:KameraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
