import { Component } from '@angular/core';
import { UserElementComponent } from '../user-element/user-element.component';
import { EditUserComponent } from '../edit-user/edit-user.component';


export interface User {
  nom: string,
  age: number
}


@Component({
  selector: 'app-users-control-center',
  imports: [UserElementComponent, EditUserComponent],
  templateUrl: './users-control-center.component.html',
  styleUrl: './users-control-center.component.css'
})


export class UsersControlCenterComponent {
  user: User = {
    nom: 'Elon',
    age: 54,
  }

  onEditUser(user: User): void {
    this.user = user;
  }
}
