import { Component } from '@angular/core';
import { PlaylistComponent } from '../playlist/playlist.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-dashboard',
  imports: [PlaylistComponent, ProfileComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
