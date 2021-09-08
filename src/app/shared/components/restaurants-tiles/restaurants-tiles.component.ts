import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/core/models/restaurant';

@Component({
  selector: 'app-restaurants-tiles',
  templateUrl: './restaurants-tiles.component.html',
  styleUrls: ['./restaurants-tiles.component.scss']
})
export class RestaurantsTilesComponent implements OnInit {

  @Input()
  restaurants!: Restaurant[];

  constructor() { }

  ngOnInit(): void {
  }

}
