import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ControlsComponent } from '../controls/controls.component';

@Component({
  selector: 'app-nesting',
  imports: [DashboardComponent, ControlsComponent],
  templateUrl: './nesting.component.html',
  styleUrl: './nesting.component.css'
})
export class NestingComponent {

}
