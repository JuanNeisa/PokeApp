import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from '../pokedex/pokedex.component';



@NgModule({
  declarations: [PokedexComponent],
  exports:[PokedexComponent],
  imports: [
    CommonModule
  ]
})
export class PokedexModule { }
