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
          console.log(pokemon);
          this.pokemon = pokemon;
          this.pokemonType = weaknessChart.find(type => type.name.toLowerCase() === this.pokemon.types[0].type.name.toLowerCase());
          console.log(this.pokemonType);
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
            },
            error => {
              console.log(error);
            }
          );
        });
    });
  }

  buildEvolutionTree(evolution) {
    if (evolution.evolves_to) {
      const pokemon = {};
      Object.assign(pokemon, evolution.evolves_to[0].species);
      Object.assign(pokemon, evolution.evolves_to[0].evolution_details[0]);
      this.evolutions.push(pokemon);
      this.buildEvolutionTree(evolution.evolves_to[0]);
    } 

  //  evolution.evolves_to.forEach(pokemon => pokemon)
  }
    // if (evolution.evolves_to[1]){
    //   const pokemon = {};
    //   Object.assign(pokemon, evolution.evolves_to[1].species);
    //   Object.assign(pokemon, evolution.evolves_to[1].evolution_details[0]);
    //   this.evolutions.push(pokemon);
    //   this.buildEvolutionTree(evolution.evolves_to[0]);
    // }
    // if (evolution.evolves_to[2]){
    //   const pokemon = {};
    //   Object.assign(pokemon, evolution.evolves_to[2].species);
    //   Object.assign(pokemon, evolution.evolves_to[2].evolution_details[0]);
    //   this.evolutions.push(pokemon);
    //   this.buildEvolutionTree(evolution.evolves_to[0]);
    // }
    // if (evolution.evolves_to[3]){
    //   const pokemon = {};
    //   Object.assign(pokemon, evolution.evolves_to[3].species);
    //   Object.assign(pokemon, evolution.evolves_to[3].evolution_details[0]);
    //   this.evolutions.push(pokemon);
    //   this.buildEvolutionTree(evolution.evolves_to[0]);
    // }
    // if (evolution.evolves_to[4]){
    //   const pokemon = {};
    //   Object.assign(pokemon, evolution.evolves_to[4].species);
    //   Object.assign(pokemon, evolution.evolves_to[4].evolution_details[0]);
    //   this.evolutions.push(pokemon);
    //   this.buildEvolutionTree(evolution.evolves_to[0]);
    // }
    // if (evolution.evolves_to[5]){
    //   const pokemon = {};
    //   Object.assign(pokemon, evolution.evolves_to[5].species);
    //   Object.assign(pokemon, evolution.evolves_to[5].evolution_details[0]);
    //   this.evolutions.push(pokemon);
    //   this.buildEvolutionTree(evolution.evolves_to[0]);
    // }
    // if (evolution.evolves_to[6]){
    //   const pokemon = {};
    //   Object.assign(pokemon, evolution.evolves_to[6].species);
    //   Object.assign(pokemon, evolution.evolves_to[6].evolution_details[0]);
    //   this.evolutions.push(pokemon);
    //   this.buildEvolutionTree(evolution.evolves_to[0]);
    // }
    // if (evolution.evolves_to[7]){
    //   const pokemon = {};
    //   Object.assign(pokemon, evolution.evolves_to[7].species);
    //   Object.assign(pokemon, evolution.evolves_to[7].evolution_details[0]);
    //   this.evolutions.push(pokemon);
    //   this.buildEvolutionTree(evolution.evolves_to[0]);
    // }
  

}
