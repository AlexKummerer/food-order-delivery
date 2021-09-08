import { Restaurant } from 'src/app/core/models/restaurant';

export const RESTAURANTS: Array<Restaurant> = [
  {
    id: 1,
    address: {
      name: 'Pizza & Eis Venezia',
      street: 'Hauptstrasse 18',
      zipCode: 91575,
      city: 'Windsbach',
      phone: '01573-52134733',
    },
    openingHours: [
      {
        days: 'Mo - Fr',
        hours: '11:00 - 14:00',
      },
      {
        days: 'Mo - Fr',
        hours: '17:00 - 22:00',
      },
      {
        days: 'Sa - So',
        hours: '10:00 - 16:00',
      },
      {
        days: 'Sa - So',
        hours: '18:00 - 24:00',
      },
    ],
  },
  {
    id: 2,
    address: {
      name: 'Mare Monte',
      street: 'Flyerstree 25',
      zipCode: 123335,
      city: 'Vollerau',
      phone: '018745- 15165587',
    },
    openingHours: [
      {
        days: 'Mo - Fr',
        hours: '11:00 - 14:00',
      },
      {
        days: 'Mo - Fr',
        hours: '17:00 - 22:00',
      },
      {
        days: 'Sa - So',
        hours: '10:00 - 16:00',
      },
      {
        days: 'Sa - So',
        hours: '18:00 - 24:00',
      },
    ],
  },
];
