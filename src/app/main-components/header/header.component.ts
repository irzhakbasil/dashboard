import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { AvatarComponent } from '../../shared/avatar/avatar.component';

@Component({
  selector: 'app-header',
  imports: [MenuComponent, AvatarComponent],
  template: `
    <header class="app-header">
      <div class="top-bar">
        <div class="welcome-message">
          <span>Hi Arthur, welcome! You have 12 open tasks.</span>
        </div>
        <div class="top-bar-actions">
          <input type="text" placeholder="Search" class="search-input" />
          <app-avatar [shortName]="'AR'"></app-avatar>
        </div>
      </div>
    </header>
    <app-menu></app-menu>
  `,
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
