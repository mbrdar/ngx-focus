import {ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[ngxFocus]'
})
export class NgxFocusDirective implements OnInit {

  @Input('ngxFocus')
  condition = true;

  @Output()
  fieldFocused = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    if (this.condition) {
      this.cdr.detectChanges();
      this.elementRef.nativeElement.focus();
      this.fieldFocused.emit();
    }
  }
}
