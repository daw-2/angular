import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[clearOnDbClick]'
})
export class ClearOnDbClickDirective {

  constructor(private element: ElementRef, private renderer2: Renderer2) { }

  @HostListener('dblclick') clear() {
    //this.element.nativeElement.value = null;
    this.renderer2.setProperty(this.element.nativeElement, 'value', null);
  }
}
