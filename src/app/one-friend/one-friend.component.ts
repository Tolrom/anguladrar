import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one-friend',
  imports: [CommonModule],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {
  @Input() ami!: {
    prenom: string,
    nom: string,
    bio: string,
    aura: number,
    passions: string[],
    naissance: number,
    image: string,
    style: string
  }

  disabled = false;

  getColor(): string {
    return this.ami.style === "ON" ? "chartreuse" : "violet";
  }

  ngOnInit(){
    setTimeout(()=> this.disabled = true, 3000);
    this.ami.style = Math.random() > 0.5 ? "ON" : "OFF";
  }

  getAge(annee: number): number {
    return 2025 - annee;
  }
}
