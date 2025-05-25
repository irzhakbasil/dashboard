import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-wrapper',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './component-wrapper.component.html',
  styleUrl: './component-wrapper.component.scss',
})
export class ComponentWrapperComponent {
  @Input() marginBottom: string = '40';
}
