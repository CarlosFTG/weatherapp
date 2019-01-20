import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageLRComponent } from './error-message-lr.component';

describe('ErrorMessageLRComponent', () => {
  let component: ErrorMessageLRComponent;
  let fixture: ComponentFixture<ErrorMessageLRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageLRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessageLRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
