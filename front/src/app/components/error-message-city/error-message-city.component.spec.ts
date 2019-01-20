import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageCityComponent } from './error-message-city.component';

describe('ErrorMessageCityComponent', () => {
  let component: ErrorMessageCityComponent;
  let fixture: ComponentFixture<ErrorMessageCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessageCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
