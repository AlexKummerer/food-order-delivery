import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoureRestaurantsComponent } from './pages/youre-restaurants/youre-restaurants.component';
import { SupportedRestaurantsTileComponent } from './components/supported-restaurants-tile/supported-restaurants-tile.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    YoureRestaurantsComponent,
    SupportedRestaurantsTileComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RestaurantsModule { }
