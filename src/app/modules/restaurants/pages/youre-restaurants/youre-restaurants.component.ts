import { Component, OnInit } from '@angular/core';
import { RESTAURANTS } from 'src/app/core/constants/restaurants.constant';
import { Restaurant } from 'src/app/core/models/restaurant';

@Component({
  selector: 'app-youre-restaurants',
  templateUrl: './youre-restaurants.component.html',
  styleUrls: ['./youre-restaurants.component.scss'],
})
export class YoureRestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = RESTAURANTS;

  constructor() {}

  ngOnInit(): void {}
}
