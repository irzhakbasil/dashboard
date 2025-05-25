import { Component } from '@angular/core';
import {
  MyAccountDisplayColumns,
  MyAccountsData,
} from '../../app-data/app-data';
import { UniversalTableComponent } from '../../shared/universal-table/universal-table.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import {
  MyAccountFiltersEnum,
  MyAccountsFilterComponent,
} from './my-accounts-filter/my-accounts-filter.component';

export type MyAccountsItem = (typeof MyAccountsData)[number];

export type ExtandedWorkQueueItem = MyAccountsItem & {
  accountNameType?: {
    accountName: string;
    accountType: string;
  };
};

@Component({
  selector: 'app-my-accounts',
  imports: [
    UniversalTableComponent,
    SectionHeaderComponent,
    MyAccountsFilterComponent,
  ],
  templateUrl: './my-accounts.component.html',
  styleUrl: './my-accounts.component.scss',
})
export class MyAccountsComponent {
  originalTableData = MyAccountsData.map((item) => ({
    ...item,
    accountNameType: {
      accountName: item.accountName,
      accountType: item.type,
    },
  }));

  filterdTableData = this.originalTableData.slice(0, 6); // to fit design
  displayColumns: string[] = MyAccountDisplayColumns;

  customColumnHeaders = {
    accountNameType: 'ACCOUNT NAME/TYPE',
    renewalDate: 'RENEWAL DATE',
    ratedPremium: 'RATED PREMIUM',
    lossRatio: 'LOSS RATIO',
    actions: ' ', // Empty header for actions column
  };

  filterChanged(filterValues: Record<MyAccountFiltersEnum, string>): void {
    this.filterdTableData = this.originalTableData.filter((item) => {
      const searchText =
        filterValues[MyAccountFiltersEnum.TEXT_SEARCH].toLowerCase();

      const matchesSearch =
        !searchText ||
        item.accountName.toLowerCase().includes(searchText) ||
        item.line?.toLowerCase().includes(searchText) ||
        item.broker?.toLowerCase().includes(searchText);

      const matchesFilter =
        !filterValues[MyAccountFiltersEnum.FILTER] ||
        item.type === filterValues[MyAccountFiltersEnum.FILTER];

      const matchesSort =
        !filterValues[MyAccountFiltersEnum.SORT] ||
        item.renewalDate.includes(filterValues[MyAccountFiltersEnum.SORT]);

      return matchesSearch && matchesFilter && matchesSort;
    });
  }
}
