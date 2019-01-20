import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCurrentWeatherComponent } from './get-current-weather.component';

describe('GetCurrentWeatherComponent', () => {
  let component: GetCurrentWeatherComponent;
  let fixture: ComponentFixture<GetCurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCurrentWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
