import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentWrapperComponent } from '../../../shared/component-wrapper/component-wrapper.component';
import { WorkQueueComponent } from '../../../components/work-queue/work-queue.component';
import { MyAccountsComponent } from '../../../components/my-accounts/my-accounts.component';
import { PortfolioGoalsComponent } from '../../../components/portfolio-goals/portfolio-goals.component';
import { QuickActionsComponent } from '../../../components/quick-actions/quick-actions.component';
import { MarketIntelligenceComponent } from '../../../components/market-intelligence/market-intelligence.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    ComponentWrapperComponent,
    WorkQueueComponent,
    MyAccountsComponent,
    PortfolioGoalsComponent,
    QuickActionsComponent,
    MarketIntelligenceComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
