import { Routes } from '@angular/router';
import { BlankPageComponent } from './main-components/blank-page/blank-page.component';
import { DashboardComponent } from './main-components/dashboard/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  ...[
    'accounts',
    'brokers',
    'submissions',
    'organizations',
    'goals',
    'admin',
  ].map((path) => ({
    path,
    component: BlankPageComponent,
  })),
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
