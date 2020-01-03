import { Directive, OnInit, HostListener, HostBinding, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {
  private isOpen = false;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {
    console.log('constructor print out!');
  }

  ngOnInit() { }

  @HostListener('click') toggleOpen() {
    console.log('HostListener print out!');
    this.isOpen = !this.isOpen;
    const dropDown = this.eleRef.nativeElement.nextElementSibling;
    if (!this.isOpen) {
      this.renderer.addClass(dropDown, 'show');
    } else {
      this.renderer.removeClass(dropDown, 'show');
    }
  }
}
