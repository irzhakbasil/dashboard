import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversalTableComponent } from '../../shared/universal-table/universal-table.component';
import {
  WorkQueueData,
  WorkQueueDisplayColumns,
} from '../../app-data/app-data';
import { getInitiales } from '../../utils/get-initiales';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import {
  WorkQueueFilterComponent,
  WorkQueueFiltersEnum,
} from './work-queue-filter/work-queue-filter.component';

export type WorkQueueItem = (typeof WorkQueueData)[number];

export type ExtandedWorkQueueItem = WorkQueueItem & {
  clientLine?: {
    client: string;
    line: string;
  };
  originatorInfo?: {
    name: string;
    initiales: string;
  };
};

@Component({
  selector: 'app-work-queue',
  standalone: true,
  imports: [
    CommonModule,
    UniversalTableComponent,
    SectionHeaderComponent,
    WorkQueueFilterComponent,
  ],
  templateUrl: './work-queue.component.html',
  styleUrl: './work-queue.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkQueueComponent {
  originalTableData: ExtandedWorkQueueItem[] = WorkQueueData.map((item) => ({
    ...item,
    clientLine: {
      client: item.client,
      line: item.line,
    },
    originatorInfo: {
      name: item.originator,
      initiales: getInitiales(item.originator),
    },
  }));

  filterdTableData: ExtandedWorkQueueItem[] = this.originalTableData.slice(
    0,
    6
  ); // to fit design

  displayColumns: string[] = WorkQueueDisplayColumns;

  customColumnHeaders = {
    clientLine: 'CLIENT/LINE',
    originatorInfo: 'ORIGINATOR',
    actions: ' ', // string with space to display blank header
  };

  filterTableData(data: WorkQueueFiltersEnum) {
    if (data === WorkQueueFiltersEnum.ASSIGNED_TO_ME) {
      this.filterdTableData = this.originalTableData.slice(0, 6);
    } else if (data === WorkQueueFiltersEnum.PENDING) {
      this.filterdTableData = this.originalTableData
        .filter(
          (item) =>
            item.status === 'Pending' || item.status === 'Pending Review'
        )
        .slice(0, 6);
    } else if (data === WorkQueueFiltersEnum.REFERRAL) {
      this.filterdTableData = this.originalTableData
        .filter((item) => item.status === 'Referral')
        .slice(0, 6);
    }
  }
}
