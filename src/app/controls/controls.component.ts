import { Component } from '@angular/core';
import { PlayComponent } from '../nests/play/play.component';
import { PauseComponent } from '../nests/pause/pause.component';
import { StopComponent } from '../nests/stop/stop.component';

@Component({
  selector: 'app-controls',
  imports: [PlayComponent, PauseComponent, StopComponent],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent {

}
