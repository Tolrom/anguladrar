import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor, NgStyle, NgClass],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  details: boolean = false;
  tab: Array<number> = []

  onDisplay() {
    this.details = !this.details;
    this.tab.push(this.tab.length + 1);
  }
}
