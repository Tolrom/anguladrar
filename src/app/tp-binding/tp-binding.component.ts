import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-tp-binding',
  imports: [FormsModule],
  templateUrl: './tp-binding.component.html',
  styleUrl: './tp-binding.component.css'
})
export class TpBindingComponent {
  user: string = "Ksum Nole";

  resetInput(): void {
    this.user = "";
  }
}
