import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  Home,
  Database,
  LucideAngularModule,
  Users,
  FileSymlink,
  Building2,
  Goal,
  KeyRound,
  UserCheck,
  LucideIconData,
  CircleX,
} from 'lucide-angular';
@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [RouterModule, LucideAngularModule, CommonModule],
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// TODO - FIND A WAY TO PASS ICON AS INPUT
export class NavLinkComponent {
  readonly Database = Database;
  readonly User = Users;
  readonly Home = Home;
  readonly UserCheck = UserCheck;
  readonly FileSymlink = FileSymlink;
  readonly Building = Building2;
  readonly Goal = Goal;
  readonly KeyRound = KeyRound;
  readonly CircleX = CircleX;

  @Input() isFirstElement = false;
  @Input() link!: string;
  @Input() icon!: string;
  @Input() label!: string;
  @Input() isActive = false;

  iconMap: Record<string, LucideIconData> = {
    Home,
    Database,
    Users,
    FileSymlink,
    Building2,
    Goal,
    KeyRound,
    UserCheck,
  };

  get resolvedIcon(): LucideIconData {
    return this.iconMap[this.icon] ?? CircleX; // Fallback icon
  }
}
