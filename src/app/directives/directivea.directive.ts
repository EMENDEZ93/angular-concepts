import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectivea]'
})
export class DirectiveaDirective {

  @HostListener('mouseenter') mouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
  }

  constructor(private element: ElementRef) {
    //this.element.nativeElement.style.backgroundColor = 'red';
  }

}
