import {NgxFocusDirective} from './ngx-focus.directive';
import {ChangeDetectorRef, Component, ElementRef} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

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

  describe('Functionality', () => {
    it('should focus input field', () => {
      directive.condition = true;
      directive.ngOnInit();

      expect(elementRefMock.nativeElement.focus).toHaveBeenCalled();
      expect(directive.fieldFocused.emit).toHaveBeenCalled();
    });

    it('should focus input field when there is no parameter provided', () => {
      directive.condition = '';
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

  describe('when no condition is provided', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          TestComponent,
          NgxFocusDirective
        ]
      }).overrideTemplate(TestComponent, '<input ngxFocus>').compileComponents();

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
    });

    let inputElement: HTMLInputElement;

    beforeEach(() => {
      inputElement = fixture.debugElement.nativeElement.querySelector('input');
      expect(document.activeElement).not.toEqual(inputElement);
    });

    it('should focus input field', () => {
      fixture.detectChanges();

      expect(document.activeElement).toEqual(inputElement);

    });
  });

  describe('when condition is true', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          TestComponent,
          NgxFocusDirective
        ]
      }).overrideTemplate(TestComponent, '<input [ngxFocus]="true">').compileComponents();

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
    });

    let inputElement: HTMLInputElement;

    beforeEach(() => {
      inputElement = fixture.debugElement.nativeElement.querySelector('input');
      expect(document.activeElement).not.toEqual(inputElement);
    });


    it('should focus input field', () => {
      fixture.detectChanges();

      expect(document.activeElement).toEqual(inputElement);

    });
  });

  describe('when condition is false', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          TestComponent,
          NgxFocusDirective
        ]
      }).overrideTemplate(TestComponent, '<input [ngxFocus]="false">').compileComponents();

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
    });

    let inputElement: HTMLInputElement;

    beforeEach(() => {
      inputElement = fixture.debugElement.nativeElement.querySelector('input');
      expect(document.activeElement).not.toEqual(inputElement);
    });

    it('should not focus input field', () => {
      fixture.detectChanges();
      expect(document.activeElement).not.toEqual(inputElement);

    });
  });

  describe('when condition is invalid', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          TestComponent,
          NgxFocusDirective
        ]
      }).overrideTemplate(TestComponent, '<input [ngxFocus]="test">').compileComponents();

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
    });

    let inputElement: HTMLInputElement;

    beforeEach(() => {
      inputElement = fixture.debugElement.nativeElement.querySelector('input');
      expect(document.activeElement).not.toEqual(inputElement);
    });


    it('should focus input field', () => {
      fixture.detectChanges();

      expect(document.activeElement).toEqual(inputElement);

    });
  });
});


@Component({
  template: ''
})
class TestComponent {
}
