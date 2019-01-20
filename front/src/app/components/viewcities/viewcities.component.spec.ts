import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcitiesComponent } from './viewcities.component';

describe('ViewcitiesComponent', () => {
  let component: ViewcitiesComponent;
  let fixture: ComponentFixture<ViewcitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
