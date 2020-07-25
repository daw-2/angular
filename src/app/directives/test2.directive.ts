import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[test]'
})
export class Test2Directive {
  @Input()
  @HostBinding('style.color')
  test: string;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    console.log(this.element.nativeElement);
  }

  @HostListener('click')
  run() {
    alert(this.test);
    this.test = 'red';
  }

  @HostListener('window:scroll', ['$event'])
  scroll(event) {
    console.log(event.currentTarget.scrollY);
  }

}
