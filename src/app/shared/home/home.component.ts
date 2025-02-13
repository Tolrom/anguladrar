import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-home',
  imports: [WelcomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private logger: LoggerService) {
    this.logger.logErrorCustom('Ceci est un message d\'erreur d\'exemple.');
  }
}
