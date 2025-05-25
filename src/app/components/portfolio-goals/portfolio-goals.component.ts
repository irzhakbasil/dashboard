import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../main-components/header/header.component';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-portfolio-goals',
  imports: [NgIf, NgFor, DecimalPipe, HeaderComponent, SectionHeaderComponent],
  templateUrl: './portfolio-goals.component.html',
  styleUrl: './portfolio-goals.component.scss',
})
export class PortfolioGoalsComponent {
  portfolioLossRatio = 48.2;
  portfolioLossTarget = 55;

  renewalRetention = 88;
  renewalTargetRange = [85, 90];

  newBusiness = 8.1;
  newBusinessTarget = 12;

  annualGWP = 28.4;
  annualGWPTarget = 42;

  get portfolioLossOffset(): number {
    return this.portfolioLossTarget - this.portfolioLossRatio;
  }

  get newBusinessPercent(): number {
    return Math.round((this.newBusiness / this.newBusinessTarget) * 100);
  }

  get annualGWPPercent(): number {
    return Math.round((this.annualGWP / this.annualGWPTarget) * 100);
  }

  get greenWidth(): number {
    return this.portfolioLossRatio;
  }

  get yellowWidth(): number {
    return Math.max(this.portfolioLossTarget - this.portfolioLossRatio, 0);
  }

  get redWidth(): number {
    return Math.max(100 - this.portfolioLossTarget, 0);
  }
}
