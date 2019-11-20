import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[bg]'
})
export class BgDirective {
  @Input('bg') color: string;

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter', ['$event'])
  @HostListener('mouseleave', ['$event']) changeBackground(event) {
    let color = 'mouseenter' === event.type ? this.color : null;

    this.element.nativeElement.style.backgroundColor = color;
  }
}
