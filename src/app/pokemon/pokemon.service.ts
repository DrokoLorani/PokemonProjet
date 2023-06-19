import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/myData').pipe(
      tap((pokemonList) => console.table(pokemonList)),
      catchError((error) => this.handleError(error, []))
    )
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/myData/${pokemonId}`).pipe(
      tap((pokemon) => console.table(pokemon)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  getPokemonType(): string[] {
    return ['Plante','Eau','Feu','Electrik','Poison','Sol','Insecte','Fée','Vol','Normal'];
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOption = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    
    return this.http.put('api/myData', pokemon, httpOption).pipe(
      tap((pokemon) => console.table(pokemon)),
      catchError((error) => this.handleError(error, null))
    )
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
