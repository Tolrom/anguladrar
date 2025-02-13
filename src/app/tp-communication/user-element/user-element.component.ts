import { Component, Input } from '@angular/core';
import { User } from '../users-control-center/users-control-center.component';

@Component({
  selector: 'app-user-element',
  imports: [],
  templateUrl: './user-element.component.html',
  styleUrl: './user-element.component.css'
})
export class UserElementComponent {
  @Input() user!: User;
}
