import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsTilesComponent } from './restaurants-tiles.component';

describe('RestaurantsTilesComponent', () => {
  let component: RestaurantsTilesComponent;
  let fixture: ComponentFixture<RestaurantsTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
