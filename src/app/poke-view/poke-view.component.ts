import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-poke-view',
  templateUrl: './poke-view.component.html',
  styleUrls: ['./poke-view.component.scss']
})
export class PokeViewComponent implements OnInit {
  description: any;
  pokemonId: any;
  pokemon: any;
  evolutions: any;
  chainUrl: any;
  pokemonType: any;

  constructor(private route: ActivatedRoute,
              private pokemonService: PokemonService) {
  }

  ngOnInit() {
    const weaknessChart = this.pokemonService.weaknessChart;
    this.pokemon = this.route.params.subscribe(params => {
      this.pokemonId = Number(params.id);
      this.pokemonService.getPokemon(params.id)
        .subscribe(pokemon => {
          this.pokemon = pokemon;
          this.pokemonType = weaknessChart.find(type => type.name.toLowerCase() === this.pokemon.types[0].type.name.toLowerCase());
          this.pokemonService.getSpecies(this.pokemon.id).subscribe(
            data => {
              this.description = data.flavor_text_entries.filter(
                version => version.version.name === 'y' && version.language.name === 'en')[0];
              this.chainUrl = data.evolution_chain.url;
              this.pokemonService.getEvolutions(this.chainUrl)
                .subscribe(evolution => {
                  const pokemon = {};
                  Object.assign(pokemon, evolution.chain.species);
                  this.evolutions = [pokemon];
                  this.buildEvolutionTree(evolution.chain);
                });
            }
          );
        });
    });
  }

  buildEvolutionTree(evolution) {
    console.log(evolution);
    evolution.evolves_to.forEach(e => {
      const pokemon = {};
      Object.assign(pokemon, e.species);
      Object.assign(pokemon, e.evolution_details[0]);
      this.evolutions.push(pokemon);
    });

    console.log(evolution);
    if (evolution && evolution.evolves_to.length) {
      this.buildEvolutionTree(evolution.evolves_to[0]);
    }
  }
}
