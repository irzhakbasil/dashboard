import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[tableColumn]',
  standalone: true,
})
export class TableColumnDirective {
  @Input('tableColumn') columnName!: string;

  constructor(public template: TemplateRef<any>) {}
}
