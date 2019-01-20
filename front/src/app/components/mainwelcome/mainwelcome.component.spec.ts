import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainwelcomeComponent } from './mainwelcome.component';

describe('MainwelcomeComponent', () => {
  let component: MainwelcomeComponent;
  let fixture: ComponentFixture<MainwelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainwelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
