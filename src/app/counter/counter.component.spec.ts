import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should a value', () => {
    let counter = new CounterComponent();

    expect(counter.value).toBe(0);
  });

  it('should have increment/decrement method', () => {
    let counter = new CounterComponent();

    expect(counter.increment).not.toBeNull();
    expect(counter.decrement).not.toBeNull();
  });

  it('should have increment/decrement method', () => {
    let counter = new CounterComponent();

    expect(counter.value).toBe(0);
    counter.increment();

    expect(counter.value).toBe(1);
    counter.decrement();
    counter.decrement();
    counter.increment();

    expect(counter.value).toBe(0);
  });

  it('should increment when click plus button', () => {
    let element = fixture.nativeElement;

    let button = element.querySelector('.btn-plus');
    expect(button).not.toBeNull();
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    let value = element.querySelector('span');
    expect(+value.textContent).toBe(1);
  });
});
