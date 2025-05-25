import {
  Component,
  ViewChildren,
  QueryList,
  TemplateRef,
  Input,
  AfterViewInit,
  ChangeDetectorRef,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { TableColumnDirective } from './directives/table-column.directive';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { AvatarComponent } from '../avatar/avatar.component';
import { LucideAngularModule, CircleEllipsis } from 'lucide-angular';

@Component({
  selector: 'app-universal-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    TableColumnDirective,
    AvatarComponent,
    LucideAngularModule,
  ],
  templateUrl: './universal-table.component.html',
  styleUrls: ['./universal-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniversalTableComponent implements AfterViewInit {
  @Input() data: unknown[] = [];
  @Input() displayColumns: string[] = [];
  @Input() columnHeaders: Record<string, string> = {};
  @Input() tableWidth = '900';

  @ViewChildren(TableColumnDirective)
  customTemplates!: QueryList<TableColumnDirective>;

  columnTemplateMap: Record<string, TemplateRef<any>> = {};

  cdr = inject(ChangeDetectorRef);

  CircleEllipsis = CircleEllipsis;

  ngAfterViewInit(): void {
    this.customTemplates.forEach((directive) => {
      this.columnTemplateMap[directive.columnName] = directive.template;
    });
    this.cdr.detectChanges(); // Ensure change detection runs after view initialization
  }

  getTemplate(column: string): TemplateRef<any> | null {
    return this.columnTemplateMap[column] || null;
  }

  getLossRatioClass(value: string): string {
    console.log('Loss Ratio Value:', value);
    const numericValue = parseInt(value, 10);
    if (numericValue < 35) return 'low';
    if (numericValue < 50) return 'medium';
    return 'high';
  }

  getDotArray(value: string): any[] {
    switch (value.toLowerCase()) {
      case 'very strong':
        return Array(5);
      case 'strong':
        return Array(4);
      case 'medium':
      case 'meduim': // typo fallback
        return Array(3);
      case 'weak':
        return Array(2);
      default:
        return Array(1);
    }
  }
}
