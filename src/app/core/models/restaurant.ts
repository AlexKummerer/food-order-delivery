export interface Restaurant {
  id: number;
  address: RestaurantAddress;
  openingHours: Array<RestaurantOpeningHours>;
}

export interface RestaurantAddress {
  name: string;
  street: string;
  zipCode: number;
  city: string;
  phone?: string;
}

export interface RestaurantOpeningHours {
  days: string;
  hours: string;
}
