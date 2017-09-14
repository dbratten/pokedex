import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-pokedex-main',
  templateUrl: './pokedex-main.component.html',
  styleUrls: ['./pokedex-main.component.scss']
})
export class PokedexMainComponent implements OnInit {
  pokemons: any;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.pokemonService.getPokemonList()
      .subscribe(pokemons => {
        this.pokemons = pokemons;
      });
  }

}
