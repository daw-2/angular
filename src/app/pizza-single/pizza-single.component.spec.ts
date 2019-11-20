import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSingleComponent } from './pizza-single.component';

describe('PizzaSingleComponent', () => {
  let component: PizzaSingleComponent;
  let fixture: ComponentFixture<PizzaSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
