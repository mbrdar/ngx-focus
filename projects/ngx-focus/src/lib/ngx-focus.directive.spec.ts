import {NgxFocusDirective} from './ngx-focus.directive';
import {ChangeDetectorRef, ElementRef} from '@angular/core';

describe('NgxFocusDirective', () => {
  let elementRefMock: ElementRef;
  let directive: NgxFocusDirective;
  beforeEach(() => {
    elementRefMock = {
      nativeElement: {
        focus() {
        }
      }
    };
    directive = new NgxFocusDirective(elementRefMock, {
      detectChanges: () => {
      }
    } as ChangeDetectorRef);
    spyOn(elementRefMock.nativeElement, 'focus').and.callThrough();
    spyOn(directive.fieldFocused, 'emit').and.callThrough();
  });

  it('should focus input field', () => {
    directive.condition = true;
    directive.ngOnInit();

    expect(elementRefMock.nativeElement.focus).toHaveBeenCalled();
    expect(directive.fieldFocused.emit).toHaveBeenCalled();
  });

  it('should not focus input field', () => {
    directive.condition = false;
    directive.ngOnInit();

    expect(elementRefMock.nativeElement.focus).not.toHaveBeenCalled();
    expect(directive.fieldFocused.emit).not.toHaveBeenCalled();
  });
});
