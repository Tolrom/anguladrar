import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent, NgIf],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {

  bind: string = "Elon Musk";
  onUpdateFriendsList(eventInput:Event): void {
    this.bind = (<HTMLInputElement>eventInput.target).value ;
  }

  target = {
    name: "",
    dead: false
  }
  onSup(): void{
    this.target.dead = true;
    this.target.name = this.bind;
  }
}
