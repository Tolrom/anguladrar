import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZeldaService {
  private apiUrl = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures";

  async fetchZeldaMobs(): Promise<any> {
    const response = await fetch(this.apiUrl);
    console.log(response);

    if (!response.ok) {
      throw new Error('Failed to fetch Pokémon list');
    }
    return response.json();
  }

}
