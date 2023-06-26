import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
})
export class AddPokemonComponent implements OnInit {

  pokemon: Pokemon;
  
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }

}
