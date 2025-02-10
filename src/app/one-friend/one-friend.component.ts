import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one-friend',
  imports: [CommonModule],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {
  ami = {
    prenom: "Elon",
    nom: "Musk",
    bio: "Quand un baron du pétrole des années 1900 et un adolescent en crise essaient de posséder le même corps.",
    aura: -150000000,
    passions: [
      "Voler",
      "Etre nazi",
      "Faire semblant d'être bon à PoE2"
    ],
    naissance: 1971
  }

  getAge(annee: number): number {
    return 2025 - annee;
  }
}
