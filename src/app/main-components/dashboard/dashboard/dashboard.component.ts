import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentWrapperComponent } from '../../../shared/component-wrapper/component-wrapper.component';
import { WorkQueueComponent } from '../../../components/work-queue/work-queue.component';
import { MyAccountsComponent } from '../../../components/my-accounts/my-accounts.component';
import { PortfolioGoalsComponent } from '../../../components/portfolio-goals/portfolio-goals.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    ComponentWrapperComponent,
    WorkQueueComponent,
    MyAccountsComponent,
    PortfolioGoalsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
