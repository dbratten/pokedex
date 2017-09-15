import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-poke-view',
  templateUrl: './poke-view.component.html',
  styleUrls: ['./poke-view.component.scss']
})
export class PokeViewComponent implements OnInit {
  pokemonId: any;
  pokemon: any;
  evolution: any;
  chainUrl: any;

  constructor(private route: ActivatedRoute,
              private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.pokemon = this.route.params.subscribe(params => {
      this.pokemonId = params.id;
      this.pokemonService.getPokemon(params.id)
        .subscribe(pokemon => {
          this.pokemon = pokemon;
          this.pokemonService.getSpecies(this.pokemon.id).subscribe(
            data => {
              this.chainUrl = data.evolution_chain.url;
              console.log(data);
              this.pokemonService.getEvolutions(this.chainUrl)
                .subscribe(evolution => {
                  this.evolution = evolution.chain;
                });
            },
            error => {
              console.log(error);
            }
          );
        });
    });

  }

}
