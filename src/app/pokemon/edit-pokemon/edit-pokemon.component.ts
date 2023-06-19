import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
})
export class EditPokemonComponent implements OnInit{

  pokemon: Pokemon|undefined;

  constructor(
    private pokemonService: PokemonService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const pokemonId: string|null = this.activateRoute.snapshot.paramMap.get('id');
    if(pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    } else {
      this.pokemon = undefined;
    }
  }
}