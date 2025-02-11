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
    naissance: 1971,
    image: "https://forward.com/wp-content/uploads/2025/01/GettyImages-2194418432-2400x1350.jpg"
  }
  disabled = false;

  ngOnInit(){
    setTimeout(()=> this.disabled = true, 3000);
  }

  getAge(annee: number): number {
    return 2025 - annee;
  }
}
