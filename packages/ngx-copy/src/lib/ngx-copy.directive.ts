import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngxCopy]',
  exportAs: 'copy',
  standalone: true,
})
export class NgxCopyDirective {
  public constructor(private _elementRef: ElementRef) {}

  public copy(): void {
    let select: Selection | null = window.getSelection();
    if (select) {
      select.removeAllRanges();
    }
    const element: HTMLElement = this._elementRef.nativeElement;
    if (
      element instanceof HTMLInputElement ||
      element instanceof HTMLTextAreaElement
    ) {
      this._elementRef.nativeElement.select();
    } else {
      const range: Range = document.createRange();
      range.selectNodeContents(this._elementRef.nativeElement);
      select = window.getSelection();
      if (select) {
        select.addRange(range);
      }
    }
    document.execCommand('copy');
  }
}