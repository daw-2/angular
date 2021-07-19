import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCreateComponent } from './pizza-create.component';

describe('PizzaCreateComponent', () => {
  let component: PizzaCreateComponent;
  let fixture: ComponentFixture<PizzaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
