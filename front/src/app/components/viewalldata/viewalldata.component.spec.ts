import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalldataComponent } from './viewalldata.component';

describe('ViewalldataComponent', () => {
  let component: ViewalldataComponent;
  let fixture: ComponentFixture<ViewalldataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewalldataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewalldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
