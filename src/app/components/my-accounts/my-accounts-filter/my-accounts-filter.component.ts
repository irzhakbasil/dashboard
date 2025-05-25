import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export enum MyAccountFiltersEnum {
  TEXT_SEARCH = 'TEXT_SEARCH',
  FILTER = 'FILTER',
  SORT = 'SORT',
  GROUP = 'GROUP',
}

@Component({
  selector: 'app-my-accounts-filter',
  imports: [FormsModule],
  templateUrl: './my-accounts-filter.component.html',
  styleUrl: './my-accounts-filter.component.scss',
})
export class MyAccountsFilterComponent {
  filterValues: Record<MyAccountFiltersEnum, string> = {
    [MyAccountFiltersEnum.TEXT_SEARCH]: '',
    [MyAccountFiltersEnum.FILTER]: '',
    [MyAccountFiltersEnum.SORT]: '',
    [MyAccountFiltersEnum.GROUP]: '',
  };

  @Output() filterChanged = new EventEmitter<
    Record<MyAccountFiltersEnum, string>
  >();
  MyAccountFiltersEnum = MyAccountFiltersEnum;
  searchText = '';

  _updateFilter(event: MyAccountFiltersEnum): void {
    switch (event) {
      case MyAccountFiltersEnum.TEXT_SEARCH:
        this.filterValues[MyAccountFiltersEnum.TEXT_SEARCH] = this.searchText;
        break;
      case MyAccountFiltersEnum.FILTER:
      case MyAccountFiltersEnum.SORT:
      case MyAccountFiltersEnum.GROUP:
        // Handle other filter updates if needed
        break;
    }
    this.filterChanged.emit(this.filterValues);
  }
}
