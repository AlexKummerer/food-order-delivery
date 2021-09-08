import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoureRestaurantsComponent } from './modules/restaurants/pages/youre-restaurants/youre-restaurants.component';

const routes: Routes = [
{path: '' , component: YoureRestaurantsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
