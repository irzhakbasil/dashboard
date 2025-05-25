import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavLinkComponent } from '../../../shared/nav-link/nav-link.component';
import { LucideAngularModule } from 'lucide-angular';
import { MenuItems } from '../../../app-data/menu-items';
import { MenuItem } from '../../../models/menu-item-interface';

@Component({
  selector: 'app-menu',
  imports: [NavLinkComponent, LucideAngularModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  menuItems: MenuItem[] = MenuItems;
}
