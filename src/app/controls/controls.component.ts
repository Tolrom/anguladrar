import { Component } from '@angular/core';
import { PlayComponent } from '../play/play.component';
import { PauseComponent } from '../pause/pause.component';
import { StopComponent } from '../stop/stop.component';

@Component({
  selector: 'app-controls',
  imports: [PlayComponent, PauseComponent, StopComponent],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent {

}
