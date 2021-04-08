import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs"

import { Pokemon } from '../Modelos/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  private pokemon: Pokemon | undefined;
  private apiURL = "https://pokeapi.co/api/v2/pokemon/"

  constructor(private http: HttpClient) {}

  private getRandomArbitrary() : String {
    return String(Math.floor(Math.random() * (898) + 1));
  }
  

   public getRandomPokemon(): Observable<Pokemon> {
    //Ver la ruta que genera
    //  console.log(this.apiURL + this.getRandomArbitrary());
    return this.http.get<Pokemon>(this.apiURL + this.getRandomArbitrary());
  }

}
