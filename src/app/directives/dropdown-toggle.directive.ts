import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dropdownToggle]'
})
export class DropdownToggleDirective {

  constructor(private element: ElementRef) { }

  @HostListener('click') change() {
    let dropdownMenu = this.element.nativeElement.nextElementSibling;
    let parent = this.element.nativeElement.parentNode;

    if (dropdownMenu.classList.contains('show')) {
      dropdownMenu.classList.remove('show');
      parent.classList.remove('show');
    } else {
      dropdownMenu.classList.add('show');
      parent.classList.add('show');
    }
  }
}
