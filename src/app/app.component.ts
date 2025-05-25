import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from 'lucide-angular';
import { MenuComponent } from './main-components/header/menu/menu.component';
import { HeaderComponent } from './main-components/header/header.component';
import { DashboardComponent } from './main-components/dashboard/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dashboard';
}
