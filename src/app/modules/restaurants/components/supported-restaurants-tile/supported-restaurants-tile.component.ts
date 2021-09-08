import { Restaurant } from 'src/app/core/models/restaurant';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-supported-restaurants-tile',
  templateUrl: './supported-restaurants-tile.component.html',
  styleUrls: ['./supported-restaurants-tile.component.scss']
})
export class SupportedRestaurantsTileComponent implements OnInit {

  @Input() restaurants!: Restaurant[]



  constructor() { }

  ngOnInit(): void {

    console.log(this.restaurants);

  }

}
