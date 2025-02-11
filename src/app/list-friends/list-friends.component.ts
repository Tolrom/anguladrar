import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent, NgIf, NgForOf],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {

  bind: string = "Elon Musk";
  onUpdateFriendsList(eventInput:Event): void {
    this.bind = (<HTMLInputElement>eventInput.target).value ;
  }

  amis =[ {
    prenom: "Elon",
    nom: "Musk",
    bio: "Quand un baron du pétrole des années 1900 et un adolescent en crise essaient de posséder le même corps.",
    aura: -150000000,
    passions: [
      "Voler",
      "Etre nazi",
      "Faire semblant d'être bon à PoE2"
    ],
    naissance: 1971,
    image: "https://forward.com/wp-content/uploads/2025/01/GettyImages-2194418432-2400x1350.jpg",
    style: ""
  },{
    prenom: "Donald",
    nom: "Trump",
    bio: "Un gros bébé avec les codes de l'arme nucléaire.",
    aura: -150000000,
    passions: [
      "Crier",
      "Etre idiot",
      "Faire caca dans sa couche"
    ],
    naissance: 1946,
    image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/C204/production/_94686694_trump-getty.jpg",
    style: ""
  },{
    prenom: "Andrew",
    nom: "Tate",
    bio: "Un masculiniste frustré avec les capacités cognitives et émotionnelles d'une pelle.",
    aura: -150000000,
    passions: [
      "Détester les femmes",
      "Faire de la muscu",
      "Proxenetisme"
    ],
    naissance: 1986,
    image: "https://i.redd.it/bpr1ks23lkla1.jpg",
    style: ""
  }
]

  target = {
    name: "",
    dead: false
  }
  onSup(): void{
    this.target.dead = true;
    this.target.name = this.bind;
  }
}
