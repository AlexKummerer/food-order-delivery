import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportedRestaurantsTileComponent } from './supported-restaurants-tile.component';

describe('SupportedRestaurantsTileComponent', () => {
  let component: SupportedRestaurantsTileComponent;
  let fixture: ComponentFixture<SupportedRestaurantsTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportedRestaurantsTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportedRestaurantsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
