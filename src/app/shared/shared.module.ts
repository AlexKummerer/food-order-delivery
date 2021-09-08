import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsTilesComponent } from './components/restaurants-tiles/restaurants-tiles.component';



@NgModule({
  declarations: [
    RestaurantsTilesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RestaurantsTilesComponent
  ]
})
export class SharedModule { }
