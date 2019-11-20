import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dropdownToggle]'
})
export class DropdownToggleDirective {

  constructor(private element: ElementRef, private renderer2: Renderer2) { }

  @HostListener('click') change() {
    let dropdownMenu = this.element.nativeElement.nextElementSibling;
    let parent = this.element.nativeElement.parentNode;

    this.renderer2.addClass(dropdownMenu, 'toto');

    if (dropdownMenu.classList.contains('show')) {
      dropdownMenu.classList.remove('show');
      parent.classList.remove('show');
    } else {
      dropdownMenu.classList.add('show');
      parent.classList.add('show');
    }
  }
}
