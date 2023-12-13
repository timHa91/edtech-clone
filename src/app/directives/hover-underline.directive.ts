import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverUnderline]'
})
export class HoverUnderlineDirective {

  constructor(private elRef: ElementRef) { }

  @HostListener('mouseover') addUnderline() {
    this.elRef.nativeElement.style.textDecoration = 'underline';
  }

  @HostListener('mouseout') removeUnderline() {
    this.elRef.nativeElement.style.textDecoration = 'none';
  }
  
}
