import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can bind field in form', () => {
    let username = fixture.debugElement.query(By.css('[name="username"]')).nativeElement;
    let password = fixture.debugElement.query(By.css('[name="password"]')).nativeElement;

    username.value = 'matthieu';
    username.dispatchEvent(new Event('input'));
    password.value = 'test';
    password.dispatchEvent(new Event('input'));

    expect(component.username.value).toBe('matthieu');
    expect(component.password.value).toBe('test');
  });

  it('can register an user', () => {
    component.userForm.controls.username.setValue('matthieu');
    component.userForm.controls.password.setValue('test');

    let form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    let span = fixture.nativeElement.querySelector('span');
    expect(span.textContent).toBe('matthieu test');
  });

  it('cannot register an invalid user', () => {
    component.userForm.controls.username.setValue('');
    component.userForm.controls.password.setValue('');

    let form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    let span = fixture.nativeElement.querySelector('span');
    expect(span).toBeNull();
  });

  it('can handle custom validator', () => {
    let username = fixture.debugElement.query(By.css('[name="username"]')).nativeElement;
    let password = fixture.debugElement.query(By.css('[name="password"]')).nativeElement;

    username.value = 'matthieu';
    username.dispatchEvent(new Event('input'));
    password.value = '12';
    password.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    let customError = fixture.nativeElement.querySelector('#custom-error');
    expect(customError.textContent.trim()).toBe('Custom error');
  });

  it('can handle async validator', fakeAsync(() => {
    httpTestingController = TestBed.inject(HttpTestingController);

    component.userForm.controls.username.setValue('fiorella');

    let req = httpTestingController.expectOne('http://localhost:3000/users?username=fiorella');
    req.flush([0]);
    httpTestingController.verify();

    tick(1500);
    fixture.detectChanges();

    let asyncStatus = fixture.nativeElement.querySelector('#async-status');
    expect(asyncStatus.textContent.trim()).toBe('INVALID');

    component.userForm.controls.username.setValue('fiorella');

    let req2 = httpTestingController.expectOne('http://localhost:3000/users?username=fiorella');
    req2.flush([]);
    httpTestingController.verify();

    tick(1500);
    fixture.detectChanges();

    expect(asyncStatus.textContent.trim()).toBe('VALID');
    // component.existsValidator()(new FormControl('fiorella')).;
  }));
});
