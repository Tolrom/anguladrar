import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../users-control-center/users-control-center.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  imports: [FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {

  @Output() onEditUser = new EventEmitter<User>();

  user: User = {
    nom: "",
    age: 0
  }

  editUser(): void {
    this.onEditUser.emit(this.user);
  }
}
