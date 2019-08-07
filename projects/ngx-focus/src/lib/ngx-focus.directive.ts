import {ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[ngxFocus]'
})
export class NgxFocusDirective implements OnInit {

  private _condition = true;

  @Input('ngxFocus')
  set condition(value: string | boolean) {
    this._condition = typeof value === 'boolean' ? value : true;
  }

  @Output()
  fieldFocused = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    if (this._condition) {
      this.cdr.detectChanges();
      this.elementRef.nativeElement.focus();
      this.fieldFocused.emit();
    }
  }
}
