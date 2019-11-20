import { Directive, Input, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[test]'
})
export class TestDirective {
    @Input() test: string;
    @HostBinding('style.color') color: string = '#fff';

    constructor(
        private element: ElementRef,
        private renderer2: Renderer2
    ) { }

    ngOnInit() {
        console.log(this.test);
        console.log(this.element.nativeElement);
        // On peut manipuler le DOM avec Renderer2
        this.renderer2.setStyle(this.element.nativeElement, 'background-color', 'lightgrey');
        this.renderer2.setProperty(this.element.nativeElement, 'textContent', this.test);
    }

    @HostListener('click')
    listen() {
        alert(this.test);
        this.color = 'red';
    }

    @HostListener('window:scroll', ['$event'])
    scroll(event) {
        console.log(event.currentTarget.scrollY); // Récupère la position du scroll
    }
}
