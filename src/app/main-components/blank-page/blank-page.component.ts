import { UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-blank-page',
  imports: [UpperCasePipe, RouterModule],
  templateUrl: './blank-page.component.html',
  styleUrl: './blank-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlankPageComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  pageName = signal<string>('');
  ngOnInit() {
    this.pageName.set(
      this.activatedRoute.snapshot.url.map((segment) => segment.path)[0]
    );
  }
}
