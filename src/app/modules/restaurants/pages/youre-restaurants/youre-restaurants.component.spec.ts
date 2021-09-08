import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoureRestaurantsComponent } from './youre-restaurants.component';

describe('YoureRestaurantsComponent', () => {
  let component: YoureRestaurantsComponent;
  let fixture: ComponentFixture<YoureRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoureRestaurantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoureRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
