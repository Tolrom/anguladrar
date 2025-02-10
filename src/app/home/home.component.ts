import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ControlsComponent } from '../controls/controls.component';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-home',
  imports: [DashboardComponent, ControlsComponent, WelcomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
