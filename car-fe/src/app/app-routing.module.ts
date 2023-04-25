import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { ViewOneComponent } from './view-one/view-one.component';
import { ViewallcarsComponent } from './viewallcars/viewallcars.component';

const routes: Routes = [
 { path:"viewallcars",component:ViewallcarsComponent},
 { path:"add",component:AddCarComponent},
 { path:"one",component:ViewOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }