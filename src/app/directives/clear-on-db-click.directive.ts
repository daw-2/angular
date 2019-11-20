import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[clearOnDbClick]'
})
export class ClearOnDbClickDirective {

  constructor(private element: ElementRef) { }

  @HostListener('dblclick') clear() {
    this.element.nativeElement.value = null;
  }
}
