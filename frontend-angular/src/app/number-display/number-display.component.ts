import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-display',
  template: '<div>value: {{value}} </div>',
  styleUrls: ['./number-display.component.css'],
})
export class NumberDisplayComponent {
  @Input()
  value: number = 0;
}