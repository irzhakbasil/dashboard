import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ExtandedWorkQueueItem } from '../work-queue.component';

export enum WorkQueueFiltersEnum {
  ASSIGNED_TO_ME = 'Assigned to me',
  PENDING = 'Pending review',
  REFERRAL = 'Referral',
}

@Component({
  selector: 'app-work-queue-filter',
  imports: [CommonModule],
  templateUrl: './work-queue-filter.component.html',
  styleUrl: './work-queue-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkQueueFilterComponent {
  filerItemsCountData = {
    [WorkQueueFiltersEnum.ASSIGNED_TO_ME]: 0,
    [WorkQueueFiltersEnum.PENDING]: 0,
    [WorkQueueFiltersEnum.REFERRAL]: 0,
  };

  @Input() set data(value: ExtandedWorkQueueItem[]) {
    if (value) {
      this.setFilterItemsCountData(value);
    }
  }

  @Output() filterChanged = new EventEmitter<WorkQueueFiltersEnum>();

  WorkQueueFiltersEnum = WorkQueueFiltersEnum;
  selectedFilter: WorkQueueFiltersEnum = WorkQueueFiltersEnum.ASSIGNED_TO_ME;

  _selectFilter(filter: WorkQueueFiltersEnum): void {
    this.selectedFilter = filter;
    this.filterChanged.emit(filter);
  }

  countFilterItems(filter: WorkQueueFiltersEnum): number {
    return this.filerItemsCountData[filter] || 0;
  }

  setFilterItemsCountData(data: ExtandedWorkQueueItem[]): void {
    this.filerItemsCountData = {
      [WorkQueueFiltersEnum.ASSIGNED_TO_ME]: data.length,
      [WorkQueueFiltersEnum.PENDING]: data.filter(
        (item) => item.status === 'Pending' || item.status === 'Pending Review'
      ).length,
      [WorkQueueFiltersEnum.REFERRAL]: data.filter(
        (item) => item.status === 'Referral'
      ).length,
    };
  }
}
