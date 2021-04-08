import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Pokemon } from 'src/app/Modelos/pokemon';
import { PokeAPIService } from 'src/app/Servicios/poke-api.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  public pokemon!: { id: Number; types: JSON; name: string; sprites: JSON; weight: Number; };

  constructor(private _pokeAPI: PokeAPIService) { }

  ngOnInit(): void {
    this.getPokemon_R()
  }

  getPokemon_R(){
    this._pokeAPI.getRandomPokemon().subscribe(
      data => {
        this.pokemon = data
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error");
        } else {
          console.log("Server-side error");
        }
      }
    );
  }

  getPokemon(){

  }

}