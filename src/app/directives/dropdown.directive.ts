import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen = false;

  constructor(private elRef: ElementRef) { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.elRef.nativeElement.classList.toggle('show');
    this.elRef.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
  }

  @HostListener('document:click', ['$event']) close(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
      this.elRef.nativeElement.classList.remove('show');
      this.elRef.nativeElement.querySelector('.dropdown-menu').classList.remove('show');
    }
  }
}
