import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ZeldaService } from '../services/zelda.service';

@Component({
  selector: 'app-zelda-creatures-list',
  imports: [NgIf, NgFor, TitleCasePipe],
  templateUrl: './zelda-creatures-list.component.html',
  styleUrl: './zelda-creatures-list.component.css',
  providers: [ZeldaService]
})
export class ZeldaCreaturesListComponent {
  mobs: Array<any> = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private zeldaService: ZeldaService) {}

  ngOnInit(): void {
    this.loadZeldaMobs();
  }

  loadZeldaMobs(): void {
    this.zeldaService
      .fetchZeldaMobs()
      .then((data) => {
        this.mobs = data.data;

        console.log(this.mobs);

        this.isLoading = false;
      })
      .catch((error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      });
  }
}
