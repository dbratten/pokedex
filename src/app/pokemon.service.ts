import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {environment} from '../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {
  }

  getPokemonList() {
    return this.http.get(`${environment.servicesUrl}/pokemon`)
      .map((data: any) => data.results)
      .catch(error => Observable.throw(error));
  }

  getPokemon(pokemonId) {
    return this.http.get(`${environment.servicesUrl}/pokemon/${pokemonId}`)
      .catch(error => Observable.throw(error));
  }

  getSpecies(pokemonId) {
    return this.http.get(`${environment.servicesUrl}/pokemon-species/${pokemonId}`)
      .map((data: any) => {
        console.log(data);
        return data;
      })
      .catch(error => Observable.throw(error));
  }

  getEvolutions(url) {
    return this.http.get(url)
      .catch(error => Observable.throw(error));
  }



  weaknessChart =
    [{"name": "Normal", "immunes": ["Ghost"], "weaknesses": ["Rock", "Steel"], "strengths": []},
      {
        "name": "Fire",
        "immunes": [],
        "weaknesses": ["Fire", "Water", "Rock", "Dragon"],
        "strengths": ["Grass", "Ice", "Bug", "Steel"]
      },
      {
        "name": "Water",
        "immunes": [],
        "weaknesses": ["Water", "Grass", "Dragon"],
        "strengths": ["Fire", "Ground", "Rock"]
      },
      {
        "name": "Electric",
        "immunes": ["Ground"],
        "weaknesses": ["Electric", "Grass", "Dragon"],
        "strengths": ["Water", "Flying"]
      },
      {
        "name": "Grass",
        "immunes": [],
        "weaknesses": ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"],
        "strengths": ["Water", "Ground", "Rock"]
      },
      {
        "name": "Ice",
        "immunes": [],
        "weaknesses": ["Fire", "Water", "Ice", "Steel"],
        "strengths": ["Grass", "Ground", "Flying", "Dragon"]
      },
      {
        "name": "Fighting",
        "immunes": ["Ghost"],
        "weaknesses": ["Poison", "Flying", "Psychic", "Bug", "Fairy"],
        "strengths": ["Normal", "Ice", "Rock", "Dark", "Steel"]
      },
      {
        "name": "Poison",
        "immunes": ["Steel"],
        "weaknesses": ["Poison", "Ground", "Rock", "Ghost"],
        "strengths": ["Grass", "Fairy"]
      },
      {
        "name": "Ground",
        "immunes": ["Flying"],
        "weaknesses": ["Grass", "Bug"],
        "strengths": ["Fire", "Electric", "Poison", "Rock", "Steel"]
      },
      {
        "name": "Flying",
        "immunes": [],
        "weaknesses": ["Electric", "Rock", "Steel"],
        "strengths": ["Grass", "Fighting", "Bug"]
      },
      {"name": "Psychic", "immunes": ["Dark"], "weaknesses": ["Psychic", "Steel"], "strengths": ["Fighting", "Poison"]},
      {
        "name": "Bug",
        "immunes": [],
        "weaknesses": ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel", "Fairy"],
        "strengths": ["Grass", "Psychic", "Dark"]
      },
      {
        "name": "Rock",
        "immunes": [],
        "weaknesses": ["Fighting", "Ground", "Steel"],
        "strengths": ["Fire", "Ice", "Flying", "Bug"]
      },
      {"name": "Ghost", "immunes": ["Normal"], "weaknesses": ["Dark"], "strengths": ["Psychic", "Ghost"]},
      {"name": "Dragon", "immunes": ["Fairy"], "weaknesses": ["Steel"], "strengths": ["Dragon"]},
      {"name": "Dark", "immunes": [], "weaknesses": ["Fighting", "Dark", "Fairy"], "strengths": ["Psychic", "Ghost"]},
      {
        "name": "Steel",
        "immunes": [],
        "weaknesses": ["Fire", "Water", "Electric", "Steel"],
        "strengths": ["Ice", "Rock", "Fairy"]
      },
      {
        "name": "Fairy",
        "immunes": [],
        "weaknesses": ["Fire", "Poison", "Steel"],
        "strengths": ["Fighting", "Dragon", "Dark"]
      }];
}

