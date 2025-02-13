import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { LoggerService } from '../../services/logger.service';
import { RegisterComponent } from '../../register/register.component';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-home',
  imports: [WelcomeComponent, RegisterComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private logger: LoggerService) {
    this.logger.logErrorCustom('Ceci est un message d\'erreur d\'exemple.');
  }
}
