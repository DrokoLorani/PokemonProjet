import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  constructor(private element: ElementRef) { 
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input('pkmnBorderCard')
  borderColor: string;

  @HostListener('mouseenter') 
  onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
    this.element.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    let border = 'solid 4px ' + color;
    this.element.nativeElement.style.border = border;
  }
}
