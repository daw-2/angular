import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[displayError]'
})
export class DisplayErrorDirective {
  constructor(
    private control: NgControl,
    private element: ElementRef
  ) { }

  ngOnInit() {
    this.control.control.statusChanges.subscribe(
      status => {
        this.element.nativeElement.classList.add(status);
      }
    );
    this.control.valueChanges.subscribe(
      value => console.log(value)
    );
  }

}
